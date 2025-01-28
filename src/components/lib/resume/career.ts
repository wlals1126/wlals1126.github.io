export type Career = {
	companyName: string
	beginAt: `${number}.${number}`
	endAt: `${number}.${number}`
	team: Team[]
}

export type Team = {
	teamName: string
	position: string
	beginAt: `${number}.${number}`
	endAt?: `${number}.${number}`
	projects: Project[]
}

export type Project = {
	title: string
	description: string
	works: Works[]
	techStack: TechStack[]
}

export type Works = {
	task?: string
	description?: string | string[]
}

export type TechStack =
	| 'React'
	| 'Next.js'
	| 'Typescript'
	| 'styled-components'
	| 'Tailwind CSS'
	| 'Recoil'
	| 'Redux'
	| 'Redux Toolkit'
	| 'Redux Saga'
	| 'React Hook Form'
	| 'React Query'
	| 'TanStack Query'
	| 'Javascript'
	| 'Github'
	| 'Vite'
	| 'Spring'
	| 'Kotlin'
	| 'Python'
	| 'PromptFLow'
	| 'Azure'

export const CAREER: Career[] = [
	{
		companyName: '한국신용데이터',
		beginAt: '2024.10',
		endAt: '2025.01',
		team: [
			{
				teamName: '데이터플랫폼팀',
				position: 'Frontend Engineer',
				beginAt: '2024.10',
				endAt: '2025.01',
				projects: [
					{
						title: '액션 카탈로그',
						description:
							'부서별로 시나리오(Endpoint, API 등)를 등록하고 관리할 수 있는 백오피스 프론트엔드로, 데이터 소스에 효율적으로 접근하고 AI 성능을 향상시킬 수 있습니다. 이를 통해 프롬프트 최적화와 시나리오 구축을 지원하며, API 리스트를 관리합니다.',
						works: [
							{
								description: '통합 어드민 프론트엔드 개발 담당'
							},
							{
								description: 'Github Actions 기반 CI/CD 구축'
							},
							{
								description: '통합 어드민 메뉴 구성 및 페더레이션 배포 방식 적용'
							},
							{
								description: 'VDI 환경에서 통합 어드민 메뉴 추가 및 운영 서버 연동 작업'
							}
						],
						techStack: [
							'React',
							'Typescript',
							'Tailwind CSS',
							'TanStack Query',
							'Vite',
							'React Hook Form'
						]
					},
					{
						title: 'AI 에이전트',
						description:
							'AI-Agent는 사용자의 질문을 이해하고 적절한 답변을 제공하기 위해 설계된 대화형 시스템으로, 다양한 시나리오를 기반으로 사용자 의도를 분석하고 백엔드와 연동하여 데이터를 검색하고 처리하는 자동화된 기능을 구현한 프로젝트입니다.',
						works: [
							{
								task: '프론트엔드',
								description: [
									'내부에서 QA 용도로 쓸 Agent Lab 프론트엔드 개발',
									'AI Agent API 및 LDAP 연동을 통해 내부 서비스와의 데이터 교환 최적화'
								]
							},
							{
								task: '백엔드',
								description: [
									'AI 비서 API 설계 및 기능 개선',
									'대화 저장 로직 개선 및 DB 테이블 재설계',
									'AI 비서 기능 개선을 위한 엔드포인트 설계 및 구축',
									'텍스트 기반 질의응답 처리 (Text-to-SQL) 및 부가정보 리턴 로직 개발'
								]
							}
						],
						techStack: [
							'Next.js',
							'Typescript',
							'Spring',
							'Kotlin',
							'Tailwind CSS',
							'TanStack Query'
						]
					}
				]
			}
		]
	}
]
