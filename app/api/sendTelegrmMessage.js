
import nc from 'next-connect';
import bot from '../../path-to-telegramBot';

const handler = nc().post(async (req, res) => {
  try {
    const { message } = req.body;
    // Отправка сообщения в телеграм
    await bot.telegram.sendMessage('TELEGRAM_CHAT_ID', message);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default handler;
