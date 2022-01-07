module.exports = (Discord, client) => {
    console.log('CMG Lawyers Bot is Online');
    client.user.setPresence({ activities: [{ name: 'CMG British RP' }] });
}