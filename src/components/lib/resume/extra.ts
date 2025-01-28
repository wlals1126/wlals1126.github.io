import type { TechStack } from './career'

export type Extra = {
	projectName: string
	beginAt: `${number}.${number}`
	endAt: `${number}.${number}`
	summary: string
	works?: Works[]
	techStack?: TechStack[]
}

export type Works = {
	description: string | string[]
}

export const EXTRA: Extra[] = [
	{
		projectName: 'DEE:P',
		beginAt: '2023.10',
		endAt: '2024.04',
		summary: 'NFC를 활용한 간편한 명함 공유 서비스',
		works: [
			{
				description: '서비스 기획 및 UI/UX 디자인'
			},
			{
				description: '프론트엔드(React + TypeScript) 개발'
			},
			{
				description: 'Google OAuth 로그인 구현'
			},
			{
				description: '모바일 환경을 위한 반응형 웹 페이지 구현'
			}
		],
		techStack: ['React', 'Typescript', 'Recoil', 'styled-components']
	}
]
