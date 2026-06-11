# 06_LLM위키

LLM/AI Agent 운영 방식, 프롬프트 방향, 다음 작업 지시문을 누적하는 공간입니다.

## 현재 Agent 운영 패턴

- Case를 만들고 담당 Agent를 배정합니다.
- Agent는 Skill Registry의 스킬을 장착합니다.
- AgentRun은 실행 결과와 중간 로그를 남깁니다.
- Approval Gate는 고객-facing 행동 전 사람 승인을 요구합니다.
- Audit Ledger는 판단과 행동 이력을 남깁니다.

## 다음 개발 프롬프트

다음 단계는 `Case -> AgentRun -> Agent -> Skill -> Evidence -> Approval -> Audit` 클릭 흐름을 실제 상태 변화로 연결하는 것입니다.

## 연결 문서

- [Agent 시스템](../docs/03_agents/agent-system.md)
- [Skill Registry](../docs/03_agents/skill-registry.md)
- [Jeonse Shield Agents](../docs/03_agents/jeonse-shield-agents.md)

