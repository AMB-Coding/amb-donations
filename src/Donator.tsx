import {MonthProps} from './Month';
import {Avatar, Tooltip} from '@mantine/core';

type DonatorProps = {
	id: MonthProps['donors'][number];
};

export function Donator({id}: DonatorProps) {
	const donatorInfo = donors.get(id);
	if (!donatorInfo) {
		return <Tooltip label={id}>
			<Avatar/>
		</Tooltip>;
	}

	return <Tooltip label={donatorInfo.name}>
		<Avatar src={getAvatarUrl(id, donatorInfo.avatar)} imageProps={{loading: 'lazy'}}/>
	</Tooltip>;
}

type DonatorInfo = {
	name: string;
	avatar: string | null;
}

const donors = new Map<DonatorProps['id'], DonatorInfo>([
	['615627091634946062', {name: 'Emperor', avatar: 'd2450288a40dc09df5fde7824f3002de'}],
	['499497564748382209', {name: 'TESHAZ', avatar: 'e98111a4a5113c50e7e8ecc76697e1bf'}],
	['229571426598780929', {name: 'Marvin', avatar: '5e7d28cccfa0a4a548f4bb7671d8f8f7'}],
	['477481223955021866', {name: 'Thommy', avatar: 'fecdfbbb590a007551e5d381c2de412e'}],
	['198204581996396545', {name: 'Nameless | Steven', avatar: '5c549a306a7c96eb513a560855af76bf'}],
	['130094115894329345', {name: 'Maverick Smith', avatar: '5f8ef2f05c1b255ab941f2f6e56dbe77'}],
	['247342219667701770', {name: 'Asuma', avatar: 'a_49b58635557acbdac2f6aaa8656cfb21'}],
	['728267095384653834', {name: 'Philip M. Thomas', avatar: '34c15d25245853b27f2c737f47ebc44d'}],
	['474015305086009346', {name: '[AMB] Jack_Blues', avatar: '0afdc362709ca429edd2e4f1ec761622'}],
	['200031965145989122', {name: 'DEVOBEL', avatar: 'a_54f33c0421c46ff22a0cf7cd941e6b29'}],
	['735384736436060201', {name: '[AMB] Kalle', avatar: '616e5193941dae66c2ab1da5a4865df8'}],
	['554643902297276436', {name: 'feuertim', avatar: 'fea741c52ae2805bbf90fece49c54350'}],
	['793276451049832470', {name: 'Mäxo', avatar: '3ad580a363018d9ac5f8ac9dd34f7e11'}],
	['822099585640038449', {name: 'towytopper', avatar: '58005a02d9f8c229cff0632ef5d57ce2'}],
	['185067296623034368', {name: 'Alf', avatar: 'a_fa9cc615de6a8e6d1744bd1c568e6832'}],
	['249676681134997506', {name: 'ZXD_Martin.sᴮ', avatar: '04893dc4aa99059095992c4e9cdba6ef'}],
	['481808293820628992', {name: 'KevKevGo', avatar: '777acd892294c87cc8b2d93a54738a20'}],
	['868633450259836928', {name: 'Schneewacht', avatar: '18e10924102eb64136e57e4dab94be09'}],
	['279755592195899392', {name: '[54th ERS]JohnMcleod[Aut]', avatar: null}],
	['440263327281577985', {name: 'Sebo', avatar: '39aa58dd4ef8207f78aa7b0aa6e87aa9'}],
	['763104699322204171', {name: 'Sarde', avatar: '7fab8c207c2ce756545309341ec7487e'}],
	['439048480783335427', {name: 'HARLEKIN', avatar: '0e6637e3c7b1efe10a82ff1db94dd5e1'}],
	['279261291682463744', {name: 'Chris BlackWolf', avatar: 'd4c5e0289b625d934cf153472462c150'}],
	['669973148820832256', {name: 'caunterattack', avatar: 'f0ab4137e0cf0e17f018d3fb35091c63'}],
	['599236975861694474', {name: 'HecTiics', avatar: '60ab0ca5419dd2fff52c62d69e6858df'}],
	['327385716977958913', {name: '[AMB] Gaik', avatar: '9945a101c0b6f0f53bab921d7cd1154b'}],
	['419180257220755496', {name: 'Corsair', avatar: '3802e7ce36bcb520da8a1cb835fa4a94'}],
	['285144199702249473', {name: 'Josh707', avatar: '88b19239ce2bce9f991d808200a6f4cc'}],
]);

function getAvatarUrl(id: string, avatar: string | null): string {
	if (avatar === null) {
		return `https://cdn.discordapp.com/embed/avatars/${((BigInt(id) >> BigInt(22)) % BigInt(6))}.png`;
	}
	return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${avatar.startsWith('a_') ? 'gif' : 'png'}`;
}
