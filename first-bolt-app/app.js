const {App} = require ('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    channelID : process.env.CHANNEL_ID
});

app.event('message.channel', async ({ event, client }) => {
    try {
        const result = await client.chat.postMessage({
            channel: channelID,
            text:"Welcome!"
        });

        console.log(result);

    }
    catch (error) {
      console.error(error);
    }
  });


(async () => {
     //start the app
     await app.start(process.env.PORT || 3000);

     console.log('⚡️ Bolt app is running!');
})();