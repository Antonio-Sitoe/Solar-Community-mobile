import { fonts } from '@/constants/fonts'
import { Volume } from '../ui/Volume'
import { router } from 'expo-router'
import { Logotipo } from '@/components/ui/Logo'
import { View, Text } from '../Themed'
import { GoBackTitle } from './GoBackTitle'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '@/constants/Colors'
import Dropdown from './Dropdown'
import { useTranslateHome } from '@/hooks/useTranslateHome'

type HeaderModularProps = {
	isDefault?: boolean
	hasVolume?: boolean
	title?: string
}

const HeaderModular = ({
	isDefault = true,
	title,
	hasVolume = false,
}: HeaderModularProps) => {
	const { lang, languageData, handleChangeLanguage } = useTranslateHome()
	return (
		<View style={[styles.container, !isDefault && styles.containerWithBg]}>
			{isDefault ? <Logotipo /> : <GoBackTitle title={title} />}

			<View style={styles.actions} bgColor="transparent">
				{hasVolume && <Volume isDefault={isDefault} />}

				<View style={styles.modularView} bgColor="transparent">
					<Dropdown
						key={lang}
						label={lang}
						data={languageData}
						onSelect={handleChangeLanguage}
					/>
				</View>

				<TouchableOpacity
					style={[styles.btn, isDefault ? styles.btnRigth : styles.btnLeft]}
				>
					<Text
						style={styles.btnText}
						onPress={() => router.push('/about')}
						color={isDefault ? Colors.light.white : Colors.light.sunsetOrange}
					>
						+ info
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export { HeaderModular }

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 50,
		paddingTop: 13,
		paddingBottom: 23,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	containerWithBg: {
		backgroundColor: Colors.light.sunsetOrange,
		height: 100,
	},

	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 12,
	},
	btn: {
		width: 68,
		height: 30,
		borderRadius: 18,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnLeft: {
		backgroundColor: Colors.light.smokeWhite,
	},
	btnRigth: {
		backgroundColor: Colors.light.sunsetOrange,
	},

	btnText: {
		fontFamily: fonts.fontFamyle.Gilroy_extraBold,
		fontSize: fonts.size.sm,
	},

	modularView: {
		position: 'relative',
	},
	modularBtn: {
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		width: 140,
		flexDirection: 'row',
		gap: 5,
		backgroundColor: Colors.light.smokeWhite,
		borderRadius: 18,
	},
})
