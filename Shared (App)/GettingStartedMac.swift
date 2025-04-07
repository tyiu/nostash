//
//  GettingStartedMac.swift
//  Nostash
//
//  Created by Ryan Breen on 2/18/23.
//

import SwiftUI

struct GettingStartedMac: View {
    var body: some View {
        ScrollView {
            Text("Getting Started")
                .font(.largeTitle)
                .foregroundColor(.accentColor)
            Text("Mac")
                .font(.title)
                .foregroundColor(.accentColor)
            Text("")
            Text("Upon installation of the app, open Safari. Click on the **Safari menu -> Settings... -> Extensions tab** and activate the **Nostash** extension. You will now see the Nostash icon in your Safari toolbar. For example:")
                .padding([.horizontal, .top], 20)

            Image("macos-toolbar-inactive")
                .resizable()
                .scaledToFit()
                .frame(maxWidth: 512)
                .border(Color.accentColor, width: 2)
                .padding([.top])

            Text("""
On the right, you can see the Nostash logo, and it is gray (or **inactive**). This means that it does not have permission to access the current website.

The first time you visit a Nostr client, you will need to click the icon to give Nostash permission to access the site.

Once active, the icon will become colored and you can select it again, where you will be greeted with a similar popup:
""").multilineTextAlignment(.leading)
                .padding([.horizontal, .top], 20)
            
            Image("macos-default-popup")
                .resizable()
                .scaledToFit()
                .frame(maxWidth: 512)
                .border(Color.accentColor, width: 2)
                .padding([.top])
            
            Text("You have a default profile (with a random key) setup to start. Click the **Settings** button to configure your own keys, if you have them.").padding([.top, .bottom], 20)
        }

    }
}

struct GettingStartedMac_Previews: PreviewProvider {
    static var previews: some View {
        GettingStartedMac()
    }
}
