'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './CodeShowcase.module.css';

const TICK_MS = 45;
const PAUSE_MS = 2000;

interface FileTab {
  name: string;
  lang: string;
  icon: string;
  lines: { text: string; cls: string }[];
}

interface WorkflowStep {
  id: string;
  label: string;
  desc: string;
  files: FileTab[];
}

const workflow: WorkflowStep[] = [
  {
    id: 'prompt',
    label: '1. Describe',
    desc: 'Tell Code.ai what to build in plain English — it understands your intent.',
    files: [
      {
        name: 'prompt.txt',
        lang: 'Plain Text',
        icon: '✏️',
        lines: [
          { text: '# What I want to build:', cls: 'comment' },
          { text: '', cls: '' },
          { text: '"Build a full-stack SaaS dashboard with:', cls: 'string' },
          { text: '  - User authentication (Google OAuth)', cls: 'string' },
          { text: '  - Team management with invites', cls: 'string' },
          { text: '  - Real-time usage analytics', cls: 'string' },
          { text: '  - Dark mode & responsive layout"', cls: 'string' },
          { text: '', cls: '' },
          { text: 'Detected project: Next.js 15 + TypeScript', cls: 'output' },
          { text: 'Detected ORM: Prisma (PostgreSQL)', cls: 'output' },
          { text: 'Detected auth: NextAuth.js (already configured)', cls: 'output' },
        ],
      },
    ],
  },
  {
    id: 'generate',
    label: '2. Generate',
    desc: 'Code.ai generates production-grade code that matches your project patterns.',
    files: [
      {
        name: 'app/dashboard/page.tsx',
        lang: 'TypeScript',
        icon: '🤖',
        lines: [
          { text: "// Generated from: 'SaaS dashboard with analytics'", cls: 'comment' },
          { text: '', cls: '' },
          { text: 'import { auth } from "@/lib/auth"', cls: 'keyword' },
          { text: 'import { db } from "@/lib/db"', cls: 'keyword' },
          { text: 'import { TeamSwitcher } from "./team-switcher"', cls: 'keyword' },
          { text: '', cls: '' },
          { text: 'export default async function DashboardPage() {', cls: 'func' },
          { text: '  const session = await auth()', cls: '' },
          { text: '  if (!session) redirect("/login")', cls: 'control' },
          { text: '', cls: '' },
          { text: '  const [teams, analytics] = await Promise.all([', cls: '' },
          { text: '    db.team.findManyByUser(session.userId),', cls: '' },
          { text: '    db.analytics.getWeeklyStats(session.teamId),', cls: '' },
          { text: '  ])', cls: '' },
          { text: '', cls: '' },
          { text: '  return (', cls: 'jsx' },
          { text: '    <div className="flex h-screen">', cls: 'jsx' },
          { text: '      <Sidebar teams={teams} />', cls: 'jsx' },
          { text: '      <main className="flex-1">', cls: 'jsx' },
          { text: '        <Header user={session.user} />', cls: 'jsx' },
          { text: '        <AnalyticsGrid data={analytics} />', cls: 'jsx' },
          { text: '      </main>', cls: 'jsx' },
          { text: '    </div>', cls: 'jsx' },
          { text: '  )', cls: 'jsx' },
          { text: '}', cls: 'func' },
          { text: '', cls: '' },
          { text: '// ✓ Generated 12 files in 3.1s', cls: 'success' },
        ],
      },
      {
        name: 'app/dashboard/analytics.tsx',
        lang: 'TypeScript',
        icon: '📊',
        lines: [
          { text: '// Analytics component — auto-generated', cls: 'comment' },
          { text: '', cls: '' },
          { text: '"use client"', cls: 'keyword' },
          { text: '', cls: '' },
          { text: 'import { BarChart, LineChart } from "@/components/charts"', cls: 'keyword' },
          { text: '', cls: '' },
          { text: 'interface AnalyticsGridProps {', cls: '' },
          { text: '  data: {', cls: '' },
          { text: '    dailyUsers: number[]', cls: 'string' },
          { text: '    revenue: number[]', cls: 'string' },
          { text: '    apiCalls: number[]', cls: 'string' },
          { text: '  }', cls: '' },
          { text: '}', cls: '' },
          { text: '', cls: '' },
          { text: 'export function AnalyticsGrid({ data }: AnalyticsGridProps) {', cls: 'func' },
          { text: '  return (', cls: 'jsx' },
          { text: '    <div className="grid grid-cols-2 gap-4 p-6">', cls: 'jsx' },
          { text: '      <StatCard title="Daily Users" value="12.4K" trend="+8.2%" />', cls: 'jsx' },
          { text: '      <StatCard title="Revenue" value="$48.2K" trend="+12.1%" />', cls: 'jsx' },
          { text: '      <StatCard title="API Calls" value="847K" trend="+3.4%" />', cls: 'jsx' },
          { text: '      <StatCard title="Active Teams" value="342" trend="+5.7%" />', cls: 'jsx' },
          { text: '    </div>', cls: 'jsx' },
          { text: '  )', cls: 'jsx' },
          { text: '}', cls: 'func' },
        ],
      },
    ],
  },
  {
    id: 'review',
    label: '3. Review',
    desc: 'Automated code review catches bugs, security issues, and suggests improvements.',
    files: [
      {
        name: 'Review Report',
        lang: 'Terminal',
        icon: '🔍',
        lines: [
          { text: '$ code-ai review --pr #247', cls: 'cmd' },
          { text: '', cls: '' },
          { text: '> Analyzing 14 changed files...', cls: 'output' },
          { text: '> Checking against team rules...', cls: 'output' },
          { text: '', cls: '' },
          { text: '  ✅ No security vulnerabilities', cls: 'success' },
          { text: '  ✅ TypeScript strict: Passed', cls: 'success' },
          { text: '  ✅ Style guide: Passed', cls: 'success' },
          { text: '  ✅ Test coverage: +14.2%', cls: 'success' },
          { text: '', cls: '' },
          { text: '  ⚠️ Suggestion (low impact):', cls: 'comment' },
          { text: '     analytics.tsx:24 — useCallback wrapper', cls: '' },
          { text: '     → Prevents re-render on parent update', cls: 'comment' },
          { text: '', cls: '' },
          { text: '  ✓ Estimated impact: -18ms render time', cls: 'output' },
          { text: '', cls: '' },
          { text: '// ✓ Review complete — 0 blocking issues', cls: 'success' },
        ],
      },
    ],
  },
  {
    id: 'deploy',
    label: '4. Deploy',
    desc: 'One-click deploy with automated tests, security scans, and zero-downtime rollouts.',
    files: [
      {
        name: 'Deploy Log',
        lang: 'Terminal',
        icon: '🚀',
        lines: [
          { text: '$ code-ai deploy --env production', cls: 'cmd' },
          { text: '', cls: '' },
          { text: '> Build #847 starting...', cls: 'output' },
          { text: '> Tests: 247 passed | 0 failed | 92% coverage', cls: 'success' },
          { text: '> Lint: Clean — 0 warnings', cls: 'success' },
          { text: '> Security scan: 0 CVE | 0 secrets', cls: 'success' },
          { text: '> Bundle: 142 kB (gzip: 47 kB)', cls: 'output' },
          { text: '', cls: '' },
          { text: '> Deploying to production (3 regions)...', cls: 'output' },
          { text: '  ✓ us-east-1 — 2.3s', cls: 'success' },
          { text: '  ✓ ap-southeast-1 — 3.1s', cls: 'success' },
          { text: '  ✓ eu-west-1 — 2.8s', cls: 'success' },
          { text: '', cls: '' },
          { text: '  ✓ SSL certificate valid', cls: 'success' },
          { text: '  ✓ CDN cache warmed', cls: 'success' },
          { text: '  ✓ Health check passed', cls: 'success' },
          { text: '', cls: '' },
          { text: '// ✨ Deploy complete — 34s', cls: 'success' },
          { text: '//  https://app.company.com', cls: 'output' },
        ],
      },
    ],
  },
];

export default function CodeShowcase() {
  const [stepIdx, setStepIdx] = useState(0);
  const [fileIdx, setFileIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'paused' | 'transitioning'>('typing');
  const mounting = useRef(true);

  const step = workflow[stepIdx];
  const file = step.files[fileIdx];
  const totalLines = file.lines.length;

  const allFiles = useMemo(() => {
    const arr: { step: number; file: number; tab: FileTab }[] = [];
    workflow.forEach((s, si) => {
      s.files.forEach((f, fi) => arr.push({ step: si, file: fi, tab: f }));
    });
    return arr;
  }, []);

  const flatIdx = useMemo(() => {
    let idx = 0;
    for (let s = 0; s < stepIdx; s++) idx += workflow[s].files.length;
    return idx + fileIdx;
  }, [stepIdx, fileIdx]);

  useEffect(() => {
    if (mounting.current) { mounting.current = false; return; }
  }, []);

  // Typewriter
  useEffect(() => {
    if (phase !== 'typing') return;
    const id = window.setInterval(() => {
      setVisibleLines((prev) => (prev < totalLines ? prev + 1 : prev));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [phase, totalLines]);

  // Pause when done, then advance
  useEffect(() => {
    if (visibleLines < totalLines || phase !== 'typing') return;
    setPhase('paused');
    const id = setTimeout(() => {
      const next = flatIdx + 1;
      if (next >= allFiles.length) {
        // restart from beginning
        setStepIdx(0);
        setFileIdx(0);
        setVisibleLines(0);
        setPhase('typing');
      } else {
        const target = allFiles[next];
        setPhase('transitioning');
        setTimeout(() => {
          setStepIdx(target.step);
          setFileIdx(target.file);
          setVisibleLines(0);
          setPhase('typing');
        }, 200);
      }
    }, PAUSE_MS);
    return () => clearTimeout(id);
  }, [visibleLines, totalLines, phase, flatIdx, allFiles]);

  const jumpToStep = useCallback((si: number, fi: number) => {
    if (si === stepIdx && fi === fileIdx) return;
    setPhase('transitioning');
    setTimeout(() => {
      setStepIdx(si);
      setFileIdx(fi);
      setVisibleLines(0);
      setPhase('typing');
    }, 200);
  }, [stepIdx, fileIdx]);

  return (
    <div className={styles.window}>
      {/* Step indicator */}
      <div className={styles.steps}>
        {workflow.map((s, si) => (
          <button
            key={s.id}
            className={`${styles.step} ${si === stepIdx ? styles.stepActive : ''} ${si < stepIdx ? styles.stepDone : ''}`}
            onClick={() => jumpToStep(si, 0)}
          >
            <span className={styles.stepNum}>
              {si < stepIdx ? '✓' : si + 1}
            </span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Step description */}
      <div className={styles.descBar}>
        <span className={styles.descIcon}>
          {step.files[fileIdx].icon}
        </span>
        <span className={styles.descText}>{step.desc}</span>
      </div>

      {/* Main window */}
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.title}>{file.name}</span>
        <div className={styles.sep}>|</div>
        <div className={styles.lang}>{file.lang}</div>
        {phase === 'typing' && visibleLines < totalLines && (
          <span className={styles.status}>Generating...</span>
        )}
        {phase === 'paused' && (
          <span className={styles.statusDone}>Complete ✓</span>
        )}
        <div className={styles.spacer} />
      </div>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          {workflow.map((s, si) => (
            <div key={s.id}>
              {s.files.map((f, fi) => (
                <button
                  key={`${si}-${fi}`}
                  className={`${styles.file} ${si === stepIdx && fi === fileIdx ? styles.fileActive : ''} ${si < stepIdx ? styles.fileDone : ''}`}
                  onClick={() => jumpToStep(si, fi)}
                >
                  <span className={styles.fileIcon}>{f.icon}</span>
                  <span className={styles.fileName}>{f.name}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.editor}>
          {file.lines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`${styles.line} ${styles[line.cls] || ''}`}>
              <span className={styles.num}>{i + 1}</span>
              <span className={styles.code}>{line.text || '\u00A0'}</span>
            </div>
          ))}
          {visibleLines < totalLines && (
            <div className={styles.cursorLine}>
              <span className={styles.num}>{visibleLines + 1}</span>
              <span className={styles.cursor} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
