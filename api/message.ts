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
  console.log(`
  ;(async () => {
    try {
      const {body} = await got.post('https://ex-api.botorange.com/message/send', {
        json: {
          chatId: ${chatId},
          token: ${token},
          messageType: ${MessageType.TEXT},
          payload: {
            text: ${payload.text},
            mention: ${payload.mention}
          }
        }
      })
      console.log(body)
    } catch (error) {
      console.log(error)
    }
  })()`)
  res.end()
}
