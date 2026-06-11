const evidence = [
  {
    id: "jb-ai-mou",
    type: "JB Official",
    title: "JB금융그룹-네이버클라우드 AI 업무협약",
    source: "JB금융그룹",
    url: "https://www.jbfg.com/ko/prcenter/press/detail/17.do",
    implication:
      "기업대출 상담, 심사, 사후관리에서 상담 기록과 문서 데이터를 구조화하고 승인 판단 근거를 생성하는 방향과 연결된다.",
  },
  {
    id: "jb-network",
    type: "JB Official",
    title: "JB금융그룹 계열사와 지역 금융 접점",
    source: "JB금융그룹",
    url: "https://www.jbfg.com/ko/about/network.do",
    implication:
      "전북은행, 광주은행, JB우리캐피탈을 중심으로 지역 고객과 금융 사후관리 접점이 있다.",
  },
  {
    id: "smallbiz-burden",
    type: "News",
    title: "소상공인 금융비용 부담과 연체율 상승",
    source: "쿠키뉴스",
    url: "https://www.kukinews.com/article/view/kuk202602170018",
    implication:
      "금융비용과 내수 침체가 동시에 부담으로 나타나 cashflow triage가 필요하다.",
  },
  {
    id: "rate-shock",
    type: "News",
    title: "자영업자 대출 잔액과 금리 민감도",
    source: "연합뉴스",
    url: "https://www.yna.co.kr/view/AKR20260328043600002",
    implication:
      "금리 상승과 다중채무 부담이 지역 사업자 상환 위험으로 전이될 수 있다.",
  },
  {
    id: "fraud-ai",
    type: "Policy",
    title: "보이스피싱 AI 플랫폼과 고도화된 사기 위험",
    source: "금융위원회",
    url: "https://www.fsc.go.kr/no010101/86063",
    implication:
      "딥페이크와 음성변조 등 AI 악용 사기에 대해 Fraud Shield Agent가 외부 경보를 연결해야 한다.",
  },
  {
    id: "digital-gap",
    type: "News",
    title: "고령층 디지털 금융 역량 격차",
    source: "브라보마이라이프",
    url: "https://bravo.etoday.co.kr/view/atc_view/19103",
    implication:
      "고객 직접 자동화보다 RM 승인형 안내와 쉬운 콜백 스크립트가 적합하다.",
  },
];

const skillRack = [
  {
    slug: "case-os-core",
    purpose: "case 생성, 상태 전이, 담당 Agent 배정",
    risk: "low",
    approval: "internal only",
    enabled: true,
  },
  {
    slug: "evidence-harvest",
    purpose: "기사, 공식 발표, 상담 노트에서 위험 근거 수집",
    risk: "low",
    approval: "internal only",
    enabled: true,
  },
  {
    slug: "cashflow-stress",
    purpose: "매출 둔화, 금리 부담, 상환 압박 판단",
    risk: "medium",
    approval: "RM review",
    enabled: true,
  },
  {
    slug: "policy-match",
    purpose: "정책금융, 대환, 필요 서류 후보 매칭",
    risk: "medium",
    approval: "RM review",
    enabled: true,
  },
  {
    slug: "fraud-shield",
    purpose: "보이스피싱, 딥페이크, 이상 콜백 위험 차단",
    risk: "high",
    approval: "blocks external action",
    enabled: true,
  },
  {
    slug: "compliance-guard",
    purpose: "과장 표현, 개인정보, 준법 리스크 검토",
    risk: "high",
    approval: "mandatory",
    enabled: true,
  },
  {
    slug: "approval-gate",
    purpose: "외부 행동 전 사람 승인 요구",
    risk: "high",
    approval: "mandatory",
    enabled: true,
  },
  {
    slug: "audit-ledger",
    purpose: "근거, 판단, 행동, 승인 내역 기록",
    risk: "low",
    approval: "internal only",
    enabled: true,
  },
];

const initialCases = [
  {
    id: "jeonju-cafe",
    customerName: "전주 중앙로 카페",
    affiliate: "전북은행",
    region: "전북 전주",
    industry: "카페 · 개인사업자",
    riskScore: 88,
    status: "New",
    primaryPain: "금리 부담 + 매출 둔화",
    nextAction: "RM 콜백 초안과 상환 스트레스 점검",
    pains: ["cashflow-stress", "rate-shock", "policy-match"],
    evidenceIds: ["jb-ai-mou", "smallbiz-burden", "rate-shock", "digital-gap"],
    agents: [
      {
        name: "Pain Radar Agent",
        skills: ["evidence-harvest", "pain-classifier"],
        judgment: "소상공인 금융비용 부담 기사와 상담 메모가 같은 방향의 위험을 가리킨다.",
        action: "금리 부담, 매출 둔화, 정책금융 후보를 같은 case로 묶는다.",
        confidence: 82,
        verification: "대기",
      },
      {
        name: "Cashflow Triage Agent",
        skills: ["cashflow-stress", "rate-relief"],
        judgment: "상환 압박 우선순위가 높다. 단, 자동 대출 변경은 금지한다.",
        action: "RM이 확인할 상환 스트레스 질문 5개와 통화 메모를 생성한다.",
        confidence: 86,
        verification: "대기",
      },
      {
        name: "Policy Match Agent",
        skills: ["policy-match", "document-checklist"],
        judgment: "정책금융 또는 대환 검토 가능성이 있다.",
        action: "필요 서류와 확인 질문 체크리스트를 생성한다.",
        confidence: 73,
        verification: "대기",
      },
      {
        name: "Compliance Guard Agent",
        skills: ["compliance-guard", "claim-limiter"],
        judgment: "혜택 확정 표현은 제한해야 한다.",
        action: "고객 안내 문구를 검토 가능성 중심으로 수정한다.",
        confidence: 91,
        verification: "대기",
      },
    ],
    audit: [
      {
        time: "09:14",
        text: "Case opened from RM note and small-business risk feed.",
      },
    ],
  },
  {
    id: "gwangju-wholesale",
    customerName: "광주 송정 도소매",
    affiliate: "광주은행",
    region: "광주 광산구",
    industry: "도소매 · 개인사업자",
    riskScore: 72,
    status: "New",
    primaryPain: "정책금융 탐색 비용",
    nextAction: "대환 가능성 검토와 서류 체크리스트",
    pains: ["policy-match", "documentation", "digital-barrier"],
    evidenceIds: ["jb-network", "jb-ai-mou", "smallbiz-burden", "digital-gap"],
    agents: [
      {
        name: "Pain Radar Agent",
        skills: ["evidence-harvest", "pain-classifier"],
        judgment: "정책금융 탐색 비용과 디지털 장벽이 함께 나타난다.",
        action: "고객에게 필요한 서류 중심으로 case를 정리한다.",
        confidence: 78,
        verification: "대기",
      },
      {
        name: "Policy Match Agent",
        skills: ["policy-match", "document-checklist"],
        judgment: "사업자 정보 확인 후 대환 또는 지원제도 안내 가능성이 있다.",
        action: "대상 요건 확인표와 누락 서류 목록을 만든다.",
        confidence: 80,
        verification: "대기",
      },
      {
        name: "RM Copilot Agent",
        skills: ["notification-brief", "tone-control"],
        judgment: "고객에게 확정 혜택이 아니라 검토 절차를 안내해야 한다.",
        action: "영업점 콜백 스크립트와 방문 안내 문구를 작성한다.",
        confidence: 84,
        verification: "대기",
      },
    ],
    audit: [
      {
        time: "10:02",
        text: "Policy match case created from branch request.",
      },
    ],
  },
  {
    id: "gunsan-manufacturing",
    customerName: "군산 부품 제조업",
    affiliate: "JB우리캐피탈",
    region: "전북 군산",
    industry: "제조 · 법인사업자",
    riskScore: 94,
    status: "New",
    primaryPain: "보이스피싱 의심 콜백",
    nextAction: "외부 행동 차단과 보안 escalation",
    pains: ["fraud", "callback-risk", "do-not-contact"],
    evidenceIds: ["jb-network", "fraud-ai", "jb-ai-mou"],
    agents: [
      {
        name: "Fraud Shield Agent",
        skills: ["fraud-shield", "do-not-contact-rule"],
        judgment: "긴급 송금 요청과 콜백 URL이 결합되어 고위험이다.",
        action: "고객 발송을 차단하고 보안 escalation memo를 생성한다.",
        confidence: 93,
        verification: "대기",
      },
      {
        name: "Compliance Guard Agent",
        skills: ["privacy-redaction", "compliance-guard"],
        judgment: "상담 로그에 개인정보가 포함될 가능성이 있다.",
        action: "감사 로그와 내부 메모에서 식별 정보를 마스킹한다.",
        confidence: 90,
        verification: "대기",
      },
      {
        name: "LocalGuard Orchestrator",
        skills: ["approval-gate", "audit-ledger"],
        judgment: "L4 정보 제공 단계이며 자동 고객 접촉은 금지된다.",
        action: "보안팀과 담당 RM에게 내부 알림만 생성한다.",
        confidence: 95,
        verification: "대기",
      },
    ],
    audit: [
      {
        time: "11:20",
        text: "Suspicious callback report converted to high-risk fraud case.",
      },
    ],
  },
];

let cases = cloneCases(initialCases);
let selectedCaseId = cases[0].id;

function cloneCases(items) {
  return JSON.parse(JSON.stringify(items));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentCase() {
  return cases.find((item) => item.id === selectedCaseId);
}

function statusClass(status) {
  if (status === "Agent Running") return "status-running";
  if (status === "Approval Pending") return "status-pending";
  if (status === "Approved") return "status-approved";
  return "status-new";
}

function riskClass(risk) {
  if (risk === "high") return "risk-high";
  if (risk === "medium") return "risk-medium";
  return "risk-low";
}

function riskLabel(score) {
  if (score >= 85) return "High";
  if (score >= 70) return "Watch";
  return "Normal";
}

function renderSummary() {
  document.getElementById("summary-high").textContent = cases.filter(
    (item) => item.riskScore >= 85,
  ).length;
  document.getElementById("summary-pending").textContent = cases.filter(
    (item) => item.status === "Approval Pending",
  ).length;
  document.getElementById("summary-approved").textContent = cases.filter(
    (item) => item.status === "Approved",
  ).length;
}

function renderCases() {
  const list = document.getElementById("case-list");
  list.innerHTML = cases
    .map((item) => {
      const active = item.id === selectedCaseId ? " is-active" : "";
      return `
        <button class="case-button${active}" type="button" data-case-id="${escapeHtml(item.id)}">
          <strong>${escapeHtml(item.customerName)}</strong>
          <span class="case-meta">
            <span>${escapeHtml(item.affiliate)}</span>
            <span>${escapeHtml(item.region)}</span>
            <span>${escapeHtml(riskLabel(item.riskScore))} ${item.riskScore}</span>
          </span>
          <span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
        </button>
      `;
    })
    .join("");

  list.querySelectorAll("[data-case-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCaseId = button.dataset.caseId;
      render();
    });
  });
}

function renderDetail() {
  const item = currentCase();
  document.getElementById("case-affiliate").textContent =
    `${item.affiliate} · ${item.region} · ${item.industry}`;
  document.getElementById("case-title").textContent = item.customerName;
  const status = document.getElementById("case-status");
  status.className = `status-pill ${statusClass(item.status)}`;
  status.textContent = item.status;
  document.getElementById("risk-score").textContent = `${item.riskScore} / 100`;
  document.getElementById("risk-bar").style.width = `${item.riskScore}%`;
  document.getElementById("primary-pain").textContent = item.primaryPain;
  document.getElementById("next-action").textContent = item.nextAction;
  document.getElementById("pain-tags").innerHTML = item.pains
    .map((pain) => `<span class="tag">${escapeHtml(pain)}</span>`)
    .join("");

  document.getElementById("approve-action").disabled =
    item.status !== "Approval Pending";
}

function renderAgents() {
  const item = currentCase();
  const board = document.getElementById("agent-board");
  board.innerHTML = item.agents
    .map(
      (agent) => `
        <article class="agent-card">
          <div class="agent-top">
            <div>
              <strong>${escapeHtml(agent.name)}</strong>
              <p>${agent.skills.map(escapeHtml).join(" · ")}</p>
            </div>
            <span class="confidence">${agent.confidence}%</span>
          </div>
          <dl>
            <dt>Judgment</dt>
            <dd>${escapeHtml(agent.judgment)}</dd>
            <dt>Action</dt>
            <dd>${escapeHtml(agent.action)}</dd>
            <dt>Verification</dt>
            <dd>${escapeHtml(agent.verification)}</dd>
          </dl>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  const rack = document.getElementById("skill-rack");
  rack.innerHTML = skillRack
    .map(
      (skill) => `
        <article class="skill-card">
          <div class="skill-top">
            <strong>${escapeHtml(skill.slug)}</strong>
            <button class="skill-toggle ${skill.enabled ? "is-on" : ""}" type="button" data-skill="${escapeHtml(skill.slug)}" aria-label="${escapeHtml(skill.slug)} toggle">
              <span aria-hidden="true"></span>
            </button>
          </div>
          <p>${escapeHtml(skill.purpose)}</p>
          <span class="source-badge ${riskClass(skill.risk)}">${escapeHtml(skill.risk)} · ${escapeHtml(skill.approval)}</span>
        </article>
      `,
    )
    .join("");

  rack.querySelectorAll("[data-skill]").forEach((button) => {
    button.addEventListener("click", () => {
      const skill = skillRack.find((item) => item.slug === button.dataset.skill);
      skill.enabled = !skill.enabled;
      renderSkills();
    });
  });
}

function renderEvidence() {
  const item = currentCase();
  const feed = document.getElementById("evidence-feed");
  const related = evidence.filter((entry) => item.evidenceIds.includes(entry.id));
  feed.innerHTML = related
    .map(
      (entry) => `
        <article class="evidence-card">
          <span class="source-badge">${escapeHtml(entry.type)} · ${escapeHtml(entry.source)}</span>
          <a href="${escapeHtml(entry.url)}" target="_blank" rel="noreferrer">${escapeHtml(entry.title)}</a>
          <p>${escapeHtml(entry.implication)}</p>
        </article>
      `,
    )
    .join("");
}

function renderAudit() {
  const item = currentCase();
  const log = document.getElementById("audit-log");
  log.innerHTML = item.audit
    .slice()
    .reverse()
    .map(
      (entry) => `
        <article class="audit-item">
          <span class="audit-time">${escapeHtml(entry.time)}</span>
          <p>${escapeHtml(entry.text)}</p>
        </article>
      `,
    )
    .join("");
}

function timestamp() {
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function runAgents() {
  const item = currentCase();
  item.status = "Agent Running";
  item.agents.forEach((agent) => {
    agent.verification = "근거 연결 및 승인 정책 확인";
  });
  item.audit.push({
    time: timestamp(),
    text: "Agent run started. Skills mounted and evidence linked.",
  });
  render();

  window.setTimeout(() => {
    const current = currentCase();
    current.status = "Approval Pending";
    current.agents.forEach((agent) => {
      agent.verification = "통과";
    });
    current.audit.push({
      time: timestamp(),
      text:
        current.id === "gunsan-manufacturing"
          ? "Fraud Shield blocked customer-facing action and requested internal escalation approval."
          : "Draft action is ready for RM approval after compliance review.",
    });
    render();
  }, 420);
}

function approveAction() {
  const item = currentCase();
  if (item.status !== "Approval Pending") return;

  item.status = "Approved";
  item.audit.push({
    time: timestamp(),
    text:
      item.id === "gunsan-manufacturing"
        ? "Internal fraud escalation approved. Customer-facing action remains blocked."
        : "RM approved the proposed action. Demo outbound task recorded.",
  });
  render();
}

function resetCase() {
  const index = cases.findIndex((item) => item.id === selectedCaseId);
  const reset = cloneCases(initialCases).find((item) => item.id === selectedCaseId);
  cases[index] = reset;
  render();
}

function bindActions() {
  document.getElementById("run-agents").addEventListener("click", runAgents);
  document.getElementById("approve-action").addEventListener("click", approveAction);
  document.getElementById("reset-case").addEventListener("click", resetCase);
}

function render() {
  renderSummary();
  renderCases();
  renderDetail();
  renderAgents();
  renderSkills();
  renderEvidence();
  renderAudit();
}

bindActions();
render();

