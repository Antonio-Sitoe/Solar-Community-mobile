import MediaPlayer, { PlaylistItem } from '@/components/MediaPlayer'

export default function NewsPappersEdition() {
	const PLAYLIST = [
		new PlaylistItem(
			'Comfort Fit - “Sorry”',
			require('@/assets/Audio/Lion.mp3'),
			false,
			require('@/assets/Thumbnails/assets_164.png'),
		),
		new PlaylistItem(
			'Big Buck Bunny',
			require('@/assets/Audio/big_buck_bunny.mp4'),
			true,
		),
		new PlaylistItem(
			"Popeye - I don't scare",
			'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4',
			true,
		),
		new PlaylistItem(
			'Podington Bear - “Rubber Robot”',
			'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
			false,
			require('@/assets/Thumbnails/assets_164.png'),
		),
	]
	return <MediaPlayer PLAYLIST={PLAYLIST} />
}
