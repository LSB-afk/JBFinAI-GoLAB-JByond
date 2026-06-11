# Pain Point Evidence

Research date: 2026-06-11  
Topic constraint: free topic, but linked to JB금융그룹 business.

## Selected Problem

지역 소상공인과 중소사업자는 금리 부담, 내수 침체, 정책금융 탐색 비용, 금융사기 위험을 동시에 겪는다. 은행과 캐피탈 입장에서는 상담, 심사, 사후관리, 위험 안내, 지원제도 연결이 분절되어 있어 고객별 조기 대응이 늦어질 수 있다.

JB LocalGuard OS는 이 문제를 `Case` 단위로 묶고 Agent가 증거 수집, 위험 판단, 조치 초안, 승인 요청, 감사 로그를 수행하도록 한다.

## Evidence Table

| Evidence | What It Says | Product Implication |
| --- | --- | --- |
| JB금융그룹 계열사 소개 | 전북은행, 광주은행, JB우리캐피탈, JB자산운용, JB인베스트먼트 등 계열사가 있으며 지역 금융과 고객 접점이 명확하다. | 자유주제의 JB 사업 연계성을 확보한다. |
| JB금융그룹-네이버클라우드 AI 업무협약 | 기업대출 상담, 심사, 사후관리에서 상담 기록과 문서 데이터를 추출, 구조화, 요약, 분석하고 승인 판단 근거를 생성하는 AI 활용 방향이 공개되어 있다. | LocalGuard OS의 기업금융 case automation은 JB의 실제 AI 추진 방향과 맞다. |
| 쿠키뉴스, 소상공인 금융부담 기사 | 개인사업자 대출 연체율 상승, 금융비용 부담, 내수 침체가 언급된다. | Cashflow Triage Agent와 Rate Relief Skill의 필요성이 있다. |
| 연합뉴스, 자영업자 금리 부담 기사 | 금리 상승 시 자영업자 이자 부담이 커지고, 자영업자 대출 잔액과 다중채무 부담이 문제로 제시된다. | 금리 민감도, 다중채무 위험, 상환 부담 시나리오를 조기 탐지해야 한다. |
| 금융위원회, 보이스피싱 AI 플랫폼 | 딥페이크, 음성변조, AI 악용으로 사기가 정교해졌고 개별 금융회사 단독 FDS에는 한계가 있다고 설명한다. | Fraud Shield Agent가 외부 경보와 내부 케이스를 연결해야 한다. |
| 브라보마이라이프, 디지털 금융 역량 기사 | 고령층의 디지털 금융 이용 역량이 낮아지는 문제가 제시된다. | 고객용 화면은 복잡한 챗봇보다 RM/직원 승인형 보조와 쉬운 안내 초안이 적합하다. |

## Sources

- JB금융그룹 계열사: https://www.jbfg.com/ko/about/network.do
- JB금융그룹-네이버클라우드 AI 업무협약: https://www.jbfg.com/ko/prcenter/press/detail/17.do
- 쿠키뉴스 소상공인 금융부담: https://www.kukinews.com/article/view/kuk202602170018
- 연합뉴스 자영업자 금리 부담: https://www.yna.co.kr/view/AKR20260328043600002
- 금융위원회 보이스피싱 AI 플랫폼: https://www.fsc.go.kr/no010101/86063
- 브라보마이라이프 디지털 금융 역량: https://bravo.etoday.co.kr/view/atc_view/19103

## Design Choice

고객에게 바로 자동 발송하는 완전 자동화는 금융권 운영 리스크가 크다. 따라서 MVP는 승인 중심 자동화로 설계한다.

- Agent는 위험을 감지하고 조치 초안을 만든다.
- RM 또는 심사 담당자가 승인해야 외부 안내가 나간다.
- 위험 판단 근거와 사용한 스킬은 Audit Log에 남는다.
- 고위험 case는 자동 실행이 아니라 escalation만 수행한다.

