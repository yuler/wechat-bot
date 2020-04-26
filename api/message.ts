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
      const {body} = await got.post('https://ex-api.botorange.com/message/send', {
        json: {
          chatId: '5ea5b79abd6faa1c4e883d04',
          token: '5ea5a09a546c58005430b5ab',
          messageType: 0,
          payload: {
            text: 'asdasd',
            mention: ['wxid_bcbmjs4nqs9u22']
          }
        }
      })
      console.log(body)
    } catch (error) {
      console.log(error)
    }
  })();
  res.end()
}
