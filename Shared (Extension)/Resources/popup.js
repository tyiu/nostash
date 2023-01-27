import {
    bglog,
    getProfileNames,
    setProfileIndex,
    getProfileIndex,
} from './utils';
import Alpine from 'alpinejs';
window.Alpine = Alpine;

const log = msg => bglog(msg, 'popup');

Alpine.data('popup', () => ({
    profileNames: ['Default'],
    profileIndex: 0,

    async init() {
        log('Initializing backend.');
        await browser.runtime.sendMessage({ kind: 'init' });

        this.$watch('profileIndex', async () => {
            await this.loadNames();
            await this.setProfileIndex();
        });

        // Even though loadProfileIndex will immediately trigger a profile refresh, we still
        // need to do an initial profile refresh first. This will pull the latest data from
        // the background scripts. Specifically, this pulls the list of profile names,
        // otherwise it generates a rendering error where it may not show the correct selected
        // profile when first loading the popup.
        await this.loadNames();
        await this.loadProfileIndex();
    },

    async setProfileIndex() {
        // Becauset the popup state resets every time it open, we use null as a guard. That way
        // whenever the user opens the popup, it doesn't automatically reset the current profile
        if (this.profileIndex !== null) {
            await setProfileIndex(this.profileIndex);
        }
    },

    async loadNames() {
        this.profileNames = await getProfileNames();
    },

    async loadProfileIndex() {
        this.profileIndex = await getProfileIndex();
    },

    async openOptions() {
        await browser.runtime.openOptionsPage();
        window.close();
    },
}));

Alpine.start();
