export class Hassio {
	private socket?: WebSocket
	private id: number = 1

	public constructor(
		public hassioHostUrl: string,
		private token: string
	) {
	}

	public async init() {
		return new Promise((resolve, reject) => {
			const socket = new WebSocket(this.hassioHostUrl+"/api/websocket")
			this.socket = socket
			socket.onopen = (ev) => {
				socket.send(JSON.stringify({
					type: "auth",
					access_token: this.token
				}))
				resolve(this)
			}
			socket.onerror = (ev) => {
				this.socket = undefined
				reject(ev)
			}
			socket.onmessage = this.onMessage
		})

	}

	public async speak(message: string) {
		return this.send({
			domain: "tts",
			type: "call_service",
			service: "google_say",
			service_data: {
				entity_id: "media_player.veracity_end",
				message,
				language: "en"
			}
		})
	}

	public async pauseToggle() {
		return this.send({
			domain: "media_player",
			type: "call_service",
			service: "media_play_pause",
			service_data: {
				entity_id: "media_player.veracity_end"
			}
		})
	}
	public async setVolume(percentage: number) {
		const normalizedVolume = Math.round(percentage) % 101
		return this.send({
			domain: "media_player",
			type: "call_service",
			service: "volume_set",
			service_data: {
				entity_id: "media_player.veracity_end",
				volume_level: normalizedVolume / 100
			}
		})
	}

	public async send(op: any) {
		const fullOp = {
			id: this.id++,
			...op
		}

		if (!this.socket) {
			await this.init()
		}

		return this.socket!.send(JSON.stringify(fullOp))
	}
	public onMessage = (message: any) => {
		console.log(message)
	}
}
