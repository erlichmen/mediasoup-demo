let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ protocol, roomId, peerId })
{
	const hostname = window.location.hostname;

	return `ws://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}
