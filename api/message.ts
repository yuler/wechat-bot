import { NowRequest, NowResponse } from '@now/node'
import got from 'got'

const { TOKEN: token } = process.env

enum MessageType {
  TEXT = 0,
  IMAGE = 1,
  URL_LINK = 2,
  FILE = 3,
}

export default (req: NowRequest, res: NowResponse) => {
  const { chatId, payload } = req.body.data
  console.log(payload)
  ;(async () => {
    try {
      await got.post('https://ex-api.botorange.com/message/send', {
        json: {
          chatId,
          token,
          messageType: MessageType.TEXT,
          payload: {
            text: payload.text,
            mention: payload.mention
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
  })()
  res.end()
}
