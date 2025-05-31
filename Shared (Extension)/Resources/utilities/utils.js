const DB_VERSION = 3;
const storage = browser.storage.local;
export const RECOMMENDED_RELAYS = [
    new URL('wss://relay.damus.io'),
    new URL('wss://relay.snort.social'),
    new URL('wss://nos.lol'),
    new URL('wss://relay.primal.net'),
    new URL('wss://relay.nostr.band'),
    new URL('wss://nostr.orangepill.dev'),
];
// prettier-ignore
export const KINDS = [
    [0, 'User Metadata', 'https://github.com/nostr-protocol/nips/blob/master/01.md'],
    [1, 'Short Text Note', 'https://github.com/nostr-protocol/nips/blob/master/10.md'],
    [2, 'Recommend Relay', null],
    [3, 'Follows', 'https://github.com/nostr-protocol/nips/blob/master/02.md'],
    [4, 'Encrypted Direct Messages', 'https://github.com/nostr-protocol/nips/blob/master/04.md'],
    [5, 'Event Deletion Request', 'https://github.com/nostr-protocol/nips/blob/master/09.md'],
    [6, 'Repost', 'https://github.com/nostr-protocol/nips/blob/master/18.md'],
    [7, 'Reaction', 'https://github.com/nostr-protocol/nips/blob/master/25.md'],
    [8, 'Badge Award', 'https://github.com/nostr-protocol/nips/blob/master/58.md'],
    [9, 'Chat Message', 'https://github.com/nostr-protocol/nips/blob/master/C7.md'],
    [10, 'Group Chat Threaded Reply', null],
    [11, 'Thread', 'https://github.com/nostr-protocol/nips/blob/master/7D.md'],
    [12, 'Group Thread Reply', null],
    [13, 'Seal', 'https://github.com/nostr-protocol/nips/blob/master/59.md'],
    [14, 'Direct Message', 'https://github.com/nostr-protocol/nips/blob/master/17.md'],
    [15, 'File Message', 'https://github.com/nostr-protocol/nips/blob/master/17.md'],
    [16, 'Generic Repost', 'https://github.com/nostr-protocol/nips/blob/master/18.md'],
    [17, 'Reaction to a website', 'https://github.com/nostr-protocol/nips/blob/master/25.md'],
    [20, 'Picture', 'https://github.com/nostr-protocol/nips/blob/master/68.md'],
    [21, 'Video Event', 'https://github.com/nostr-protocol/nips/blob/master/71.md'],
    [22, 'Short-form Portrait Video Event', 'https://github.com/nostr-protocol/nips/blob/master/71.md'],
    [30, 'internal reference', 'https://wikistr.com/nkbip-03*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [31, 'external web reference', 'https://wikistr.com/nkbip-03*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [32, 'hardcopy reference', 'https://wikistr.com/nkbip-03*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [33, 'prompt reference', 'https://wikistr.com/nkbip-03*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [40, 'Channel Creation', 'https://github.com/nostr-protocol/nips/blob/master/28.md'],
    [41, 'Channel Metadata', 'https://github.com/nostr-protocol/nips/blob/master/28.md'],
    [42, 'Channel Message', 'https://github.com/nostr-protocol/nips/blob/master/28.md'],
    [43, 'Channel Hide Message', 'https://github.com/nostr-protocol/nips/blob/master/28.md'],
    [44, 'Channel Mute User', 'https://github.com/nostr-protocol/nips/blob/master/28.md'],
    [62, 'Request to Vanish', 'https://github.com/nostr-protocol/nips/blob/master/62.md'],
    [64, 'Chess (PGN)', 'https://github.com/nostr-protocol/nips/blob/master/64.md'],
    [818, 'Merge Requests', 'https://github.com/nostr-protocol/nips/blob/master/54.md'],
    [1018, 'Poll Response', 'https://github.com/nostr-protocol/nips/blob/master/88.md'],
    [1021, 'Bid', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [1022, 'Bid confirmation', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [1040, 'OpenTimestamps', 'https://github.com/nostr-protocol/nips/blob/master/03.md'],
    [1059, 'Gift Wrap', 'https://github.com/nostr-protocol/nips/blob/master/59.md'],
    [1063, 'File Metadata', 'https://github.com/nostr-protocol/nips/blob/master/94.md'],
    [1068, 'Poll', 'https://github.com/nostr-protocol/nips/blob/master/88.md'],
    [1111, 'Comment', 'https://github.com/nostr-protocol/nips/blob/master/22.md'],
    [1311, 'Live Chat Message', 'https://github.com/nostr-protocol/nips/blob/master/53.md'],
    [1337, 'Code Snippet', 'https://github.com/nostr-protocol/nips/blob/master/C0.md'],
    [1617, 'Patches', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    [1621, 'Issues', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    [1622, 'Git Replies (deprecated)', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    ['1630-1633', 'Status', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    [1971, 'Problem Tracker', 'https://github.com/nostrocket/NIPS/blob/main/Problems.md'],
    [1984, 'Reporting', 'https://github.com/nostr-protocol/nips/blob/master/56.md'],
    [1985, 'Label', 'https://github.com/nostr-protocol/nips/blob/master/32.md'],
    [1986, 'Relay reviews', null],
    [1987, 'AI Embeddings / Vector lists', 'https://wikistr.com/nkbip-02*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [2003, 'Torrent', 'https://github.com/nostr-protocol/nips/blob/master/35.md'],
    [2004, 'Torrent Comment', 'https://github.com/nostr-protocol/nips/blob/master/35.md'],
    [2022, 'Coinjoin Pool', 'https://gitlab.com/1440000bytes/joinstr/-/blob/main/NIP.md'],
    [4550, 'Community Post Approval', 'https://github.com/nostr-protocol/nips/blob/master/72.md'],
    ['5000-5999', 'Job Request', 'https://github.com/nostr-protocol/nips/blob/master/90.md'],
    ['6000-6999', 'Job Result', 'https://github.com/nostr-protocol/nips/blob/master/90.md'],
    [7000, 'Job Feedback', 'https://github.com/nostr-protocol/nips/blob/master/90.md'],
    [7374, 'Reserved Cashu Wallet Tokens', 'https://github.com/nostr-protocol/nips/blob/master/60.md'],
    [7375, 'Cashu Wallet Tokens', 'https://github.com/nostr-protocol/nips/blob/master/60.md'],
    [7376, 'Cashu Wallet History', 'https://github.com/nostr-protocol/nips/blob/master/60.md'],
    ['9000-9030', 'Group Control Events', 'https://github.com/nostr-protocol/nips/blob/master/29.md'],
    [9041, 'Zap Goal', 'https://github.com/nostr-protocol/nips/blob/master/75.md'],
    [9321, 'Nutzap', 'https://github.com/nostr-protocol/nips/blob/master/61.md'],
    [9467, 'Tidal login', 'https://wikistr.com/tidal-nostr'],
    [9734, 'Zap Request', 'https://github.com/nostr-protocol/nips/blob/master/57.md'],
    [9735, 'Zap', 'https://github.com/nostr-protocol/nips/blob/master/57.md'],
    [9802, 'Highlights', 'https://github.com/nostr-protocol/nips/blob/master/84.md'],
    [10000, 'Mute list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10001, 'Pin list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10002, 'Relay List Metadata', 'https://github.com/nostr-protocol/nips/blob/master/65.md'],
    [10003, 'Bookmark list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10004, 'Communities list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10005, 'Public chats list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10006, 'Blocked relays list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10007, 'Search relays list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10009, 'User groups', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10012, 'Favorite relays list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10013, 'Private event relay list', 'https://github.com/nostr-protocol/nips/blob/master/37.md'],
    [10015, 'Interests list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10019, 'Nutzap Mint Recommendation', 'https://github.com/nostr-protocol/nips/blob/master/61.md'],
    [10020, 'Media follows', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10030, 'User emoji list', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10050, 'Relay list to receive DMs', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [10063, 'User server list', 'https://github.com/hzrd149/blossom'],
    [10096, 'File storage server list', 'https://github.com/nostr-protocol/nips/blob/master/96.md'],
    [10166, 'Relay Monitor Announcement', 'https://github.com/nostr-protocol/nips/blob/master/66.md'],
    [13194, 'Wallet Info', 'https://github.com/nostr-protocol/nips/blob/master/47.md'],
    [17375, 'Cashu Wallet Event', 'https://github.com/nostr-protocol/nips/blob/master/60.md'],
    [21000, 'Lightning Pub RPC', 'https://github.com/shocknet/Lightning.Pub/blob/master/proto/autogenerated/client.md'],
    [22242, 'Client Authentication', 'https://github.com/nostr-protocol/nips/blob/master/42.md'],
    [23194, 'Wallet Request', 'https://github.com/nostr-protocol/nips/blob/master/47.md'],
    [23195, 'Wallet Response', 'https://github.com/nostr-protocol/nips/blob/master/47.md'],
    [24133, 'Nostr Connect', 'https://github.com/nostr-protocol/nips/blob/master/46.md'],
    [24242, 'Blobs stored on mediaservers', 'https://github.com/hzrd149/blossom'],
    [27235, 'HTTP Auth', 'https://github.com/nostr-protocol/nips/blob/master/98.md'],
    [30000, 'Follow sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30001, 'Generic lists', null],
    [30002, 'Relay sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30003, 'Bookmark sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30004, 'Curation sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30005, 'Video sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30007, 'Kind mute sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30008, 'Profile Badges', 'https://github.com/nostr-protocol/nips/blob/master/58.md'],
    [30009, 'Badge Definition', 'https://github.com/nostr-protocol/nips/blob/master/58.md'],
    [30015, 'Interest sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30017, 'Create or update a stall', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [30018, 'Create or update a product', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [30019, 'Marketplace UI/UX', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [30020, 'Product sold as an auction', 'https://github.com/nostr-protocol/nips/blob/master/15.md'],
    [30023, 'Long-form Content', 'https://github.com/nostr-protocol/nips/blob/master/23.md'],
    [30024, 'Draft Long-form Content', 'https://github.com/nostr-protocol/nips/blob/master/23.md'],
    [30030, 'Emoji sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30040, 'Curated Publication Index', 'https://wikistr.com/nkbip-01*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [30041, 'Curated Publication Content', 'https://wikistr.com/nkbip-01*fd208ee8c8f283780a9552896e4823cc9dc6bfd442063889577106940fd927c1'],
    [30063, 'Release artifact sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30078, 'Application-specific Data', 'https://github.com/nostr-protocol/nips/blob/master/78.md'],
    [30166, 'Relay Discovery', 'https://github.com/nostr-protocol/nips/blob/master/66.md'],
    [30267, 'App curation sets', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [30311, 'Live Event', 'https://github.com/nostr-protocol/nips/blob/master/53.md'],
    [30315, 'User Statuses', 'https://github.com/nostr-protocol/nips/blob/master/38.md'],
    [30388, 'Slide Set', 'https://cornychat.com/datatypes#kind30388slideset'],
    [30402, 'Classified Listing', 'https://github.com/nostr-protocol/nips/blob/master/99.md'],
    [30403, 'Draft Classified Listing', 'https://github.com/nostr-protocol/nips/blob/master/99.md'],
    [30617, 'Repository announcements', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    [30618, 'Repository state announcements', 'https://github.com/nostr-protocol/nips/blob/master/34.md'],
    [30818, 'Wiki article', 'https://github.com/nostr-protocol/nips/blob/master/54.md'],
    [30819, 'Redirects', 'https://github.com/nostr-protocol/nips/blob/master/54.md'],
    [31234, 'Draft Event', 'https://github.com/nostr-protocol/nips/blob/master/37.md'],
    [31388, 'Link Set', 'https://cornychat.com/datatypes#kind31388linkset'],
    [31890, 'Feed', 'https://wikifreedia.xyz/cip-01/'],
    [31922, 'Date-Based Calendar Event', 'https://github.com/nostr-protocol/nips/blob/master/52.md'],
    [31923, 'Time-Based Calendar Event', 'https://github.com/nostr-protocol/nips/blob/master/52.md'],
    [31924, 'Calendar', 'https://github.com/nostr-protocol/nips/blob/master/52.md'],
    [31925, 'Calendar Event RSVP', 'https://github.com/nostr-protocol/nips/blob/master/52.md'],
    [31989, 'Handler recommendation', 'https://github.com/nostr-protocol/nips/blob/master/89.md'],
    [31990, 'Handler information', 'https://github.com/nostr-protocol/nips/blob/master/89.md'],
    [32267, 'Software Application', null],
    [34550, 'Community Definition', 'https://github.com/nostr-protocol/nips/blob/master/72.md'],
    [38383, 'Peer-to-peer Order events', 'https://github.com/nostr-protocol/nips/blob/master/69.md'],
    ['39000-9', 'Group metadata events', 'https://github.com/nostr-protocol/nips/blob/master/29.md'],
    [39089, 'Starter packs', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [39092, 'Media starter packs', 'https://github.com/nostr-protocol/nips/blob/master/51.md'],
    [39701, 'Web bookmarks', 'https://github.com/nostr-protocol/nips/blob/master/B0.md'],
];

export async function initialize() {
    await getOrSetDefault('profileIndex', 0);
    await getOrSetDefault('profiles', [await generateProfile()]);
    let version = (await storage.get({ version: 0 })).version;
    console.log('DB version: ', version);
    while (version < DB_VERSION) {
        version = await migrate(version, DB_VERSION);
        await storage.set({ version });
    }
}

async function migrate(version, goal) {
    if (version === 0) {
        console.log('Migrating to version 1.');
        let profiles = await getProfiles();
        profiles.forEach(profile => (profile.hosts = {}));
        await storage.set({ profiles });
        return version + 1;
    }

    if (version === 1) {
        console.log('migrating to version 2.');
        let profiles = await getProfiles();
        await storage.set({ profiles });
        return version + 1;
    }

    if (version === 2) {
        console.log('Migrating to version 3.');
        let profiles = await getProfiles();
        profiles.forEach(profile => (profile.relayReminder = true));
        await storage.set({ profiles });
        return version + 1;
    }
}

export async function getProfiles() {
    let profiles = await storage.get({ profiles: [] });
    return profiles.profiles;
}

export async function getProfile(index) {
    let profiles = await getProfiles();
    return profiles[index];
}

export async function getProfileNames() {
    let profiles = await getProfiles();
    return profiles.map(p => p.name);
}

export async function getProfileIndex() {
    const index = await storage.get({ profileIndex: 0 });
    return index.profileIndex;
}

export async function setProfileIndex(profileIndex) {
    await storage.set({ profileIndex });
}

export async function deleteProfile(index) {
    let profiles = await getProfiles();
    let profileIndex = await getProfileIndex();
    profiles.splice(index, 1);
    if (profiles.length == 0) {
        await clearData(); // If we have deleted all of the profiles, let's just start fresh with all new data
        await initialize();
    } else {
        // If the index deleted was the active profile, change the active profile to the next one
        let newIndex =
            profileIndex === index ? Math.max(index - 1, 0) : this.profileIndex;
        await storage.set({ profiles, profileIndex: newIndex });
    }
}

export async function clearData() {
    let ignoreInstallHook = await storage.get({ ignoreInstallHook: false });
    await storage.clear();
    await storage.set(ignoreInstallHook);
}

async function generatePrivateKey() {
    return await browser.runtime.sendMessage({ kind: 'generatePrivateKey' });
}

export async function generateProfile(name = 'Default') {
    return {
        name,
        privKey: await generatePrivateKey(),
        hosts: {},
        relays: [],
        relayReminder: true,
    };
}

async function getOrSetDefault(key, def) {
    let val = (await storage.get(key))[key];
    if (val == null || val == undefined) {
        await storage.set({ [key]: def });
        return def;
    }

    return val;
}

export async function saveProfileName(index, profileName) {
    let profiles = await getProfiles();
    profiles[index].name = profileName;
    await storage.set({ profiles });
}

export async function savePrivateKey(index, privateKey) {
    await browser.runtime.sendMessage({
        kind: 'savePrivateKey',
        payload: [index, privateKey],
    });
}

export async function newProfile() {
    let profiles = await getProfiles();
    const newProfile = await generateProfile('New Profile');
    profiles.push(newProfile);
    await storage.set({ profiles });
    return profiles.length - 1;
}

export async function getRelays(profileIndex) {
    let profile = await getProfile(profileIndex);
    return profile.relays || [];
}

export async function saveRelays(profileIndex, relays) {
    // Having an Alpine proxy object as a sub-object does not serialize correctly in storage,
    // so we are pre-serializing here before assigning it to the profile, so the proxy
    // obj doesn't bug out.
    let fixedRelays = JSON.parse(JSON.stringify(relays));
    let profiles = await getProfiles();
    let profile = profiles[profileIndex];
    profile.relays = fixedRelays;
    await storage.set({ profiles });
}

export async function get(item) {
    return (await storage.get(item))[item];
}

export async function getPermissions(index = null) {
    if (!index) {
        index = await getProfileIndex();
    }
    let profile = await getProfile(index);
    let hosts = await profile.hosts;
    return hosts;
}

export async function getPermission(host, action) {
    let index = await getProfileIndex();
    let profile = await getProfile(index);
    console.log(host, action);
    console.log('profile: ', profile);
    return profile.hosts?.[host]?.[action] || 'ask';
}

export async function setPermission(host, action, perm, index = null) {
    let profiles = await getProfiles();
    if (!index) {
        index = await getProfileIndex();
    }
    let profile = profiles[index];
    let newPerms = profile.hosts[host] || {};
    newPerms = { ...newPerms, [action]: perm };
    profile.hosts[host] = newPerms;
    profiles[index] = profile;
    await storage.set({ profiles });
}

export function humanPermission(p) {
    // Handle special case where event signing includes a kind number
    if (p.startsWith('signEvent:')) {
        let [e, n] = p.split(':');
        n = parseInt(n);
        let nname = KINDS.find(k => k[0] === n)?.[1] || `Unknown (Kind ${n})`;
        return `Sign event: ${nname}`;
    }

    switch (p) {
        case 'getPubKey':
            return 'Read public key';
        case 'signEvent':
            return 'Sign event';
        case 'getRelays':
            return 'Read relay list';
        case 'nip04.encrypt':
            return 'Encrypt private message (NIP-04)';
        case 'nip04.decrypt':
            return 'Decrypt private message (NIP-04)';
        case 'nip44.encrypt':
            return 'Encrypt private message (NIP-44)';
        case 'nip44.decrypt':
            return 'Decrypt private message (NIP-44)';
        default:
            return 'Unknown';
    }
}

export function validateKey(key) {
    const hexMatch = /^[\da-f]{64}$/i.test(key);
    const b32Match = /^nsec1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{58}$/.test(key);

    return hexMatch || b32Match;
}

export async function feature(name) {
    let fname = `feature:${name}`;
    let f = await browser.storage.local.get({ [fname]: false });
    return f[fname];
}

export async function relayReminder() {
    let index = await getProfileIndex();
    let profile = await getProfile(index);
    return profile.relayReminder;
}

export async function toggleRelayReminder() {
    let index = await getProfileIndex();
    let profiles = await getProfiles();
    profiles[index].relayReminder = false;
    await storage.set({ profiles });
}

export async function getNpub() {
    let index = await getProfileIndex();
    return await browser.runtime.sendMessage({
        kind: 'getNpub',
        payload: index,
    });
}
