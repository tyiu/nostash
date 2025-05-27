//
//  MainView.swift
//  Nostash
//
//  Created by Ryan Breen on 2/17/23.
//

import SwiftUI

struct MainView: View {
    var body: some View {
        NavigationStack {
            Image("bigicon").resizable().frame(width: 150.0, height: 150.0)
            Text("Nostash").font(.title)
            Text("A Safari Nostr Extension").font(.title2)
            NavigationLink("Privacy Policy") {
                PrivacyPolicyView()
            }
#if os(macOS)
            .buttonStyle(.link)
#endif
            .padding(.all, 3.0)

            NavigationLink("Getting Started: iPhone") {
                GettingStartediPhone()
            }
#if os(macOS)
            .buttonStyle(.link)
#endif
            .padding(.all, 3.0)

            NavigationLink("Getting Started: iPad") {
                GettingStartediPad()
            }
#if os(macOS)
            .buttonStyle(.link)
#endif
            .padding(.all, 3.0)

            NavigationLink("Getting Started: Mac") {
                GettingStartedMac()
            }
#if os(macOS)
            .buttonStyle(.link)
#endif
            .padding(.all, 3.0)

            NavigationLink("Tips and Tricks") {
                TipsAndTricks()
            }
#if os(macOS)
            .buttonStyle(.link)
#endif
            .padding(.all, 3.0)
        }
        .toolbar {
            // There is a macOS bug where the back button overlaps the title in the navigation bar.
            // Adding an empty Text element fixes the issue apparently.
            Text("")
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}
