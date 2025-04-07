//
//  NostashApp.swift
//  Nostash
//
//  Created by Ryan Breen on 2/17/23.
//

import SwiftUI

@main
struct NostashApp: App {
    var body: some Scene {
        WindowGroup("Nostash") {
            MainView()
        }
        #if macOS
        .defaultSize(width: 400, height: 500)
        #endif
    }
}
