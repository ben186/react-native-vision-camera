//
//  CameraView+AVAudioSession.swift
//  VisionCamera
//
//  Created by Marc Rousavy on 26.03.21.
//  Copyright © 2021 mrousavy. All rights reserved.
//

import AVFoundation
import Foundation

/**
 Extension for CameraView that sets up the AVAudioSession.
 */
extension CameraView {
  /**
   Configures the Audio Capture Session with an audio input and audio data output.
   */
  final func configureAudioSession() {
    ReactLogger.log(level: .info, message: "Configuring Audio Session...")

    audioCaptureSession.beginConfiguration()
    defer {
      audioCaptureSession.commitConfiguration()
    }

    audioCaptureSession.automaticallyConfiguresApplicationAudioSession = false

    // Audio Input
    do {
      if let audioDeviceInput = self.audioDeviceInput {
        audioCaptureSession.removeInput(audioDeviceInput)
        self.audioDeviceInput = nil
      }
      ReactLogger.log(level: .info, message: "Adding Audio input...")
      guard let audioDevice = AVCaptureDevice.default(for: .audio) else {
        return invokeOnError(.device(.microphoneUnavailable))
      }
      audioDeviceInput = try AVCaptureDeviceInput(device: audioDevice)
      guard audioCaptureSession.canAddInput(audioDeviceInput!) else {
        return invokeOnError(.parameter(.unsupportedInput(inputDescriptor: "audio-input")))
      }
      audioCaptureSession.addInput(audioDeviceInput!)
    } catch let error as NSError {
      return invokeOnError(.device(.microphoneUnavailable), cause: error)
    }

    // Audio Output
    if let audioOutput = self.audioOutput {
      audioCaptureSession.removeOutput(audioOutput)
      self.audioOutput = nil
    }
    ReactLogger.log(level: .info, message: "Adding Audio Data output...")
    audioOutput = AVCaptureAudioDataOutput()
    guard audioCaptureSession.canAddOutput(audioOutput!) else {
      return invokeOnError(.parameter(.unsupportedOutput(outputDescriptor: "audio-output")))
    }
    audioOutput!.setSampleBufferDelegate(self, queue: audioQueue)
    audioCaptureSession.addOutput(audioOutput!)
  }

  /**
   Configures the Audio session and activates it. If the session was active it will shortly be deactivated before configuration.

   The Audio Session will be configured to allow background music, haptics (vibrations) and system sound playback while recording.
   Background audio is allowed to play on speakers or bluetooth speakers.
   */
  final func activateAudioSession() {
    ReactLogger.log(level: .info, message: "Activating Audio Session...")

    do {
      try AVAudioSession.sharedInstance().updateCategory(AVAudioSession.Category.playAndRecord,
                                                         options: [.mixWithOthers,
                                                                   .allowBluetoothA2DP,
                                                                   .defaultToSpeaker,
                                                                   .allowAirPlay])
      audioCaptureSession.startRunning()
    } catch let error as NSError {
      switch error.code {
      case 561_017_449:
        self.invokeOnError(.session(.audioInUseByOtherApp), cause: error)
      default:
        self.invokeOnError(.session(.audioSessionFailedToActivate), cause: error)
      }
    }
  }

  final func deactivateAudioSession() {
    ReactLogger.log(level: .info, message: "Deactivating Audio Session...")

    audioCaptureSession.stopRunning()
  }

  @objc
  func audioSessionInterrupted(notification: Notification) {
    ReactLogger.log(level: .error, message: "Audio Session Interruption Notification!")
    guard let userInfo = notification.userInfo,
          let typeValue = userInfo[AVAudioSessionInterruptionTypeKey] as? UInt,
          let type = AVAudioSession.InterruptionType(rawValue: typeValue) else {
      return
    }

    switch type {
    case .began:
      // Something interrupted our Audio Session, stop recording audio.
      ReactLogger.log(level: .error, message: "The Audio Session was interrupted!", alsoLogToJS: true)
    case .ended:
      ReactLogger.log(level: .info, message: "The Audio Session interruption has ended.")
      guard let optionsValue = userInfo[AVAudioSessionInterruptionOptionKey] as? UInt else { return }
      let options = AVAudioSession.InterruptionOptions(rawValue: optionsValue)
      if options.contains(.shouldResume) {
        if isRecording {
          audioQueue.async {
            ReactLogger.log(level: .info, message: "Resuming interrupted Audio Session...", alsoLogToJS: true)
            // restart audio session because interruption is over
            self.activateAudioSession()
          }
        }
      } else {
        ReactLogger.log(level: .error, message: "Cannot resume interrupted Audio Session!", alsoLogToJS: true)
      }
    @unknown default: ()
    }
  }
}
