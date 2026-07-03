'use client';

import { useState, useCallback } from 'react';
import styles from './Documentation.module.css';

const tabs = [
  { id: 'quickstart', label: 'Quick Start', icon: '▶' },
  { id: 'cli', label: 'CLI Reference', icon: '$' },
  { id: 'config', label: 'Configuration', icon: '⚙' },
  { id: 'architecture', label: 'Architecture', icon: '◈' },
  { id: 'integrations', label: 'Integrations', icon: '⇌' },
  { id: 'api', label: 'API Reference', icon: '⇶' },
];

function CodeBlock({
  lines,
  lang = 'Terminal',
}: {
  lines: { text: string; cls?: string }[];
  lang?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const text = lines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [lines]);

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLang}>{lang}</span>
        <button className={styles.codeCopy} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className={styles.codeBody}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${styles.codeLine} ${line.cls ? styles[line.cls] : ''}`}
          >
            <span className={styles.lineNum}>{i + 1}</span>
            <span className={styles.lineText}>
              {line.text || '\u00A0'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ParamTable({
  rows,
}: {
  rows: [string, string, string][];
}) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([param, type, desc], i) => (
            <tr key={i}>
              <td>
                <code>{param}</code>
              </td>
              <td>
                <span className={styles.typeTag}>{type}</span>
              </td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('quickstart');

  return (
    <section
      className="section"
      style={{ paddingTop: '3rem', background: '#0d0d0d' }}
    >
      <div className="container">
        <div className={styles.docWrap}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.content}>
            {activeTab === 'quickstart' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>Getting Started</span>
                </div>
                <h3 className={styles.contentTitle}>
                  Get Code.ai running in under 2 minutes
                </h3>
                <p className={styles.contentDesc}>
                  Generate, review, and deploy your first piece of AI-powered
                  code. No configuration needed.
                </p>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepBody}>
                    <h4>Install the CLI</h4>
                    <p>
                      Run this in your terminal to install Code.ai anywhere:
                    </p>
                    <CodeBlock
                      lines={[{ text: 'npx code-ai@latest init', cls: 'cmd' }]}
                    />
                    <p>Or install globally:</p>
                    <CodeBlock
                      lines={[
                        { text: 'npm install -g code-ai', cls: 'cmd' },
                        { text: 'code-ai --version', cls: 'cmd' },
                        { text: '', cls: '' },
                        { text: '> code-ai v2.5.1', cls: 'output' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepBody}>
                    <h4>Authenticate</h4>
                    <CodeBlock
                      lines={[
                        { text: 'code-ai login', cls: 'cmd' },
                        { text: '', cls: '' },
                        {
                          text: 'Opening browser to authenticate...',
                          cls: 'output',
                        },
                        {
                          text: '✓ Authenticated as hello@company.com',
                          cls: 'success',
                        },
                        {
                          text: '✓ Default team: Engineering',
                          cls: 'success',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepBody}>
                    <h4>Generate your first code</h4>
                    <CodeBlock
                      lines={[
                        {
                          text: 'code-ai generate "Create a data table component with sorting and pagination" --out ./components',
                          cls: 'cmd',
                        },
                        { text: '', cls: '' },
                        {
                          text: '✓ Analyzing project context...',
                          cls: 'output',
                        },
                        {
                          text: '✓ Generating DataTable.tsx...',
                          cls: 'success',
                        },
                        {
                          text: '✓ Generating DataTable.test.tsx...',
                          cls: 'success',
                        },
                        {
                          text: '✓ Generating DataTable.stories.tsx...',
                          cls: 'success',
                        },
                        { text: '', cls: '' },
                        {
                          text: '✨ Generated 3 files in 2.3s',
                          cls: 'success',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>4</div>
                  <div className={styles.stepBody}>
                    <h4>Install VS Code extension</h4>
                    <CodeBlock
                      lines={[
                        { text: 'code-ai install --vscode', cls: 'cmd' },
                        { text: '', cls: '' },
                        {
                          text: '✓ VS Code extension installed',
                          cls: 'success',
                        },
                        {
                          text: '  ▶ Cmd+Shift+P → "Code.ai: Generate"',
                          cls: 'output',
                        },
                        {
                          text: '  ▶ Right-click → "Review with Code.ai"',
                          cls: 'output',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.tip}>
                  <strong>Tip:</strong> Run{' '}
                  <code>code-ai init --project</code> to auto-detect your
                  project setup and configure everything automatically.
                </div>
              </div>
            )}

            {activeTab === 'cli' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>CLI</span>
                </div>
                <h3 className={styles.contentTitle}>
                  Command Line Interface
                </h3>
                <p className={styles.contentDesc}>
                  All commands available in the Code.ai CLI. Run{' '}
                  <code>code-ai --help</code> to see the full list.
                </p>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: 'linear-gradient(135deg, #569cd6, #00d4aa)',
                      fontSize: '0.95rem',
                    }}
                  >
                    G
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>code-ai generate</code>
                    </h4>
                    <p>
                      Generate code from a natural language description. The
                      core feature of Code.ai.
                    </p>
                    <CodeBlock
                      lines={[
                        {
                          text: 'code-ai generate <prompt> [options]',
                          cls: 'cmd',
                        },
                      ]}
                    />
                    <ParamTable
                      rows={[
                        [
                          '&lt;prompt&gt;',
                          'string',
                          'Natural language description of what to build',
                        ],
                        [
                          '--out, -o',
                          'string',
                          'Output directory for generated files',
                        ],
                        [
                          '--type, -t',
                          '"component" | "api" | "page"',
                          'Type of generation (auto-detected)',
                        ],
                        [
                          '--framework',
                          'string',
                          'Target framework: react, next, vue, etc.',
                        ],
                        [
                          '--language, -l',
                          'string',
                          'Source language: ts, js, py, go, rs',
                        ],
                        [
                          '--dry-run',
                          'boolean',
                          'Preview files without writing to disk',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: 'linear-gradient(135deg, #c586c0, #00d4aa)',
                      fontSize: '0.95rem',
                    }}
                  >
                    R
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>code-ai review</code>
                    </h4>
                    <p>
                      Run AI-powered code review on files or pull requests.
                    </p>
                    <CodeBlock
                      lines={[
                        {
                          text: 'code-ai review [target] [options]',
                          cls: 'cmd',
                        },
                      ]}
                    />
                    <ParamTable
                      rows={[
                        ['[target]', 'string', 'File, directory, or PR URL'],
                        ['--diff', 'boolean', 'Only review changed lines'],
                        ['--strict', 'boolean', 'Enable stricter checks'],
                        [
                          '--format',
                          '"json" | "markdown"',
                          'Output format (default: markdown)',
                        ],
                        [
                          '--output, -o',
                          'string',
                          'Write report to file',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: 'linear-gradient(135deg, #dcdcaa, #00d4aa)',
                      fontSize: '0.95rem',
                      color: '#0a0a0a',
                    }}
                  >
                    D
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>code-ai deploy</code>
                    </h4>
                    <p>
                      Build and deploy with zero-config CI/CD.
                    </p>
                    <CodeBlock
                      lines={[
                        {
                          text: 'code-ai deploy [environment] [options]',
                          cls: 'cmd',
                        },
                      ]}
                    />
                    <ParamTable
                      rows={[
                        [
                          '[environment]',
                          '"production" | "staging" | "preview"',
                          'Deployment target',
                        ],
                        ['--region', 'string', 'Deploy region'],
                        [
                          '--skip-tests',
                          'boolean',
                          'Skip test suite before deploy',
                        ],
                        [
                          '--rollback',
                          'boolean',
                          'Auto-rollback on failure',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: 'linear-gradient(135deg, #ce9178, #00d4aa)',
                      fontSize: '0.95rem',
                    }}
                  >
                    T
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>code-ai test</code>
                    </h4>
                    <p>Auto-generate and run tests.</p>
                    <CodeBlock
                      lines={[
                        {
                          text: 'code-ai test [target] [options]',
                          cls: 'cmd',
                        },
                      ]}
                    />
                    <ParamTable
                      rows={[
                        [
                          '[target]',
                          'string',
                          'File or directory to generate tests for',
                        ],
                        [
                          '--framework',
                          '"jest" | "vitest" | "pytest"',
                          'Test framework',
                        ],
                        [
                          '--coverage',
                          'number',
                          'Target coverage (0-100)',
                        ],
                        ['--watch', 'boolean', 'Watch mode'],
                      ]}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>Configuration</span>
                </div>
                <h3 className={styles.contentTitle}>
                  Configure Code.ai for your project
                </h3>
                <p className={styles.contentDesc}>
                  Configuration is read from{' '}
                  <code>code-ai.config.ts</code> at your project root.
                  Customize everything from naming conventions to AI model
                  selection.
                </p>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepBody}>
                    <h4>Basic Setup</h4>
                    <CodeBlock
                      lang="TypeScript"
                      lines={[
                        {
                          text: '// code-ai.config.ts',
                          cls: 'comment',
                        },
                        { text: 'export default {', cls: '' },
                        { text: '  project: {', cls: '' },
                        {
                          text: '    name: "my-app",',
                          cls: 'string',
                        },
                        {
                          text: '    framework: "next",',
                          cls: 'string',
                        },
                        {
                          text: '    language: "typescript",',
                          cls: 'string',
                        },
                        {
                          text: '    testFramework: "vitest",',
                          cls: 'string',
                        },
                        { text: '  },', cls: '' },
                        { text: '}', cls: '' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepBody}>
                    <h4>Custom Rules</h4>
                    <p>
                      Define naming conventions, import order, and style
                      rules:
                    </p>
                    <CodeBlock
                      lang="TypeScript"
                      lines={[
                        { text: 'rules: {', cls: '' },
                        { text: '  naming: {', cls: '' },
                        {
                          text: '    components: "PascalCase",',
                          cls: 'string',
                        },
                        {
                          text: '    functions: "camelCase",',
                          cls: 'string',
                        },
                        {
                          text: '    files: "kebab-case",',
                          cls: 'string',
                        },
                        { text: '  },', cls: '' },
                        {
                          text: '  imports: { sort: "alphabetical" },',
                          cls: 'string',
                        },
                        { text: '}', cls: '' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepBody}>
                    <h4>AI Providers</h4>
                    <p>
                      Configure which models Code.ai uses, with automatic
                      fallback:
                    </p>
                    <CodeBlock
                      lang="TypeScript"
                      lines={[
                        { text: 'providers: {', cls: '' },
                        { text: '  generation: {', cls: '' },
                        {
                          text: '    primary: "gpt-4o",',
                          cls: 'string',
                        },
                        {
                          text: '    fallback: "claude-4",',
                          cls: 'string',
                        },
                        {
                          text: '    temperature: 0.2,',
                          cls: 'string',
                        },
                        {
                          text: '    maxTokens: 8192,',
                          cls: 'string',
                        },
                        { text: '  },', cls: '' },
                        {
                          text: '  review: { model: "code-ai-review-v2", strict: true }',
                          cls: 'string',
                        },
                        { text: '}', cls: '' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>4</div>
                  <div className={styles.stepBody}>
                    <h4>Project Context</h4>
                    <p>
                      Help Code.ai understand your project architecture:
                    </p>
                    <CodeBlock
                      lang="TypeScript"
                      lines={[
                        { text: 'context: {', cls: '' },
                        { text: '  directories: {', cls: '' },
                        {
                          text: '    components: "./src/components",',
                          cls: 'string',
                        },
                        {
                          text: '    pages: "./src/app",',
                          cls: 'string',
                        },
                        {
                          text: '    api: "./src/app/api",',
                          cls: 'string',
                        },
                        { text: '  },', cls: '' },
                        {
                          text: '  aliases: { "@": "./src" },',
                          cls: 'string',
                        },
                        { text: '}', cls: '' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.tip}>
                  <strong>Best Practice:</strong> Run{' '}
                  <code>code-ai init --project</code> to auto-generate your
                  config based on your existing project structure.
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>Architecture</span>
                </div>
                <h3 className={styles.contentTitle}>
                  How Code.ai works under the hood
                </h3>
                <p className={styles.contentDesc}>
                  Built on a modular architecture designed for accuracy,
                  safety, and speed.
                </p>

                <div className={styles.archBox}>
                  <div className={styles.archTitle}>System Pipeline</div>
                  <div className={styles.archFlow}>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>Your Editor / CLI</span>
                    </div>
                    <div className={styles.archArrow}>&rarr;</div>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>Context Engine</span>
                    </div>
                    <div className={styles.archArrow}>&rarr;</div>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>AI Provider</span>
                    </div>
                    <div className={styles.archArrow}>&rarr;</div>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>Sandbox</span>
                    </div>
                    <div className={styles.archArrow}>&rarr;</div>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>Validator</span>
                    </div>
                    <div className={styles.archArrow}>&rarr;</div>
                    <div className={styles.archStep}>
                      <div className={styles.archDot} />
                      <span>Output</span>
                    </div>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepBody}>
                    <h4>Context Engine</h4>
                    <p>
                      Before generating any code, Code.ai analyzes your
                      project structure, reads relevant files, and builds a
                      context map. It understands your imports, conventions,
                      existing components, and dependency graph &mdash; so
                      generated code fits seamlessly into your project.
                    </p>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepBody}>
                    <h4>AI Provider Abstraction</h4>
                    <p>
                      Code.ai supports multiple AI backends through a unified
                      layer. Models can be swapped without changing your
                      workflow:
                    </p>
                    <ParamTable
                      rows={[
                        [
                          'GPT-4o',
                          'OpenAI',
                          'Best for complex generation, full context',
                        ],
                        [
                          'Claude 4',
                          'Anthropic',
                          'Best for review, security, reasoning',
                        ],
                        [
                          'Code-Llama',
                          'Meta',
                          'Open-source, on-premise capable',
                        ],
                        [
                          'Review v2',
                          'Code.ai',
                          'Fine-tuned on 10M+ PRs for code review',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepBody}>
                    <h4>Security Sandbox</h4>
                    <p>
                      Every generation runs through a security sandbox that
                      checks for:
                    </p>
                    <ul className={styles.archList}>
                      <li>
                        Hardcoded secrets, API keys, and credentials
                      </li>
                      <li>
                        SQL injection and XSS vulnerabilities
                      </li>
                      <li>
                        Dependency vulnerabilities (real-time CVE check)
                      </li>
                      <li>License compliance issues</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>4</div>
                  <div className={styles.stepBody}>
                    <h4>Code Validator</h4>
                    <p>
                      Before output is returned, it passes through validators
                      that check syntax, type correctness, and best practices.
                      This ensures generated code compiles on first try &mdash;
                      no syntax errors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>Integrations</span>
                </div>
                <h3 className={styles.contentTitle}>
                  Works with the tools you already use
                </h3>
                <p className={styles.contentDesc}>
                  No context switching. Code.ai plugs directly into your
                  existing workflow.
                </p>

                <div className={styles.integGrid}>
                  {[
                    {
                      title: 'VS Code',
                      desc: 'Inline completions, side panel, command palette. Works with Cmd+Shift+P.',
                      icon: '< >',
                    },
                    {
                      title: 'JetBrains',
                      desc: 'Plugin for IntelliJ IDEA, WebStorm, PyCharm, GoLand, and all JetBrains IDEs.',
                      icon: '{ }',
                    },
                    {
                      title: 'GitHub Actions',
                      desc: 'Automated review on every PR. Zero config setup with our GitHub Action.',
                      icon: '▲',
                    },
                    {
                      title: 'GitLab CI',
                      desc: 'CI/CD integration via GitLab CI templates. Auto-review MRs from pipelines.',
                      icon: '◆',
                    },
                    {
                      title: 'Slack',
                      desc: 'Get reviews, deploy notifications, and AI suggestions in your Slack channels.',
                      icon: '#',
                    },
                    {
                      title: 'Discord',
                      desc: 'Code.ai bot for Discord. Review snippets, run commands, get help.',
                      icon: '♪',
                    },
                  ].map((item, i) => (
                    <div key={i} className={styles.integCard}>
                      <div className={styles.integIcon}>{item.icon}</div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h4 className={styles.subTitle}>
                  GitHub Action Example
                </h4>
                <CodeBlock
                  lang="YAML"
                  lines={[
                    {
                      text: '# .github/workflows/code-ai-review.yml',
                      cls: 'comment',
                    },
                    { text: 'name: Code.ai Review', cls: '' },
                    { text: 'on: [pull_request]', cls: '' },
                    { text: 'jobs:', cls: '' },
                    { text: '  review:', cls: '' },
                    { text: '    runs-on: ubuntu-latest', cls: '' },
                    { text: '    steps:', cls: '' },
                    {
                      text: '      - uses: actions/checkout@v4',
                      cls: '',
                    },
                    {
                      text: '      - uses: code-ai/review-action@v2',
                      cls: 'keyword',
                    },
                    { text: '        with:', cls: '' },
                    {
                      text: '          api-key: ${{ secrets.CODE_AI_KEY }}',
                      cls: 'string',
                    },
                  ]}
                />
              </div>
            )}

            {activeTab === 'api' && (
              <div>
                <div className={styles.heroLine}>
                  <span className={styles.heroBadge}>API</span>
                </div>
                <h3 className={styles.contentTitle}>
                  REST API Reference
                </h3>
                <p className={styles.contentDesc}>
                  Programmatic access to Code.ai. All endpoints require
                  authentication via{' '}
                  <code>Authorization: Bearer</code> header.
                </p>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: '#00d4aa',
                      fontSize: '0.75rem',
                      color: '#0a0a0a',
                    }}
                  >
                    POST
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>/v1/generate</code>
                    </h4>
                    <p>
                      Generate code from a natural language prompt.
                    </p>
                    <ParamTable
                      rows={[
                        [
                          'prompt',
                          'string (required)',
                          'Description of what to generate',
                        ],
                        [
                          'language',
                          'string',
                          'Target language: typescript, python, go, etc.',
                        ],
                        [
                          'framework',
                          'string',
                          'Target framework: react, next, express, etc.',
                        ],
                        [
                          'options.temperature',
                          'number',
                          'Creativity level (default: 0.2)',
                        ],
                        [
                          'options.maxTokens',
                          'number',
                          'Max output tokens (default: 4096)',
                        ],
                      ]}
                    />
                    <h5 className={styles.subTitle}>Example</h5>
                    <CodeBlock
                      lang="cURL"
                      lines={[
                        {
                          text: 'curl -X POST https://api.code.ai/v1/generate \\',
                          cls: 'cmd',
                        },
                        {
                          text: '  -H "Authorization: Bearer $CODE_AI_KEY" \\',
                          cls: 'cmd',
                        },
                        {
                          text: '  -H "Content-Type: application/json" \\',
                          cls: 'cmd',
                        },
                        { text: '  -d \'{', cls: 'cmd' },
                        {
                          text: '    "prompt": "Build a user profile page with avatar upload",',
                          cls: 'string',
                        },
                        {
                          text: '    "language": "typescript",',
                          cls: 'string',
                        },
                        {
                          text: '    "framework": "react"',
                          cls: 'string',
                        },
                        { text: '  }\'', cls: 'cmd' },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: '#569cd6',
                      fontSize: '0.75rem',
                    }}
                  >
                    POST
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>/v1/review</code>
                    </h4>
                    <p>
                      Submit code for AI-powered review.
                    </p>
                    <ParamTable
                      rows={[
                        [
                          'code',
                          'string (required)',
                          'Source code or diff to review',
                        ],
                        [
                          'language',
                          'string',
                          'Language for syntax-aware analysis',
                        ],
                        [
                          'strict',
                          'boolean',
                          'Enable stricter checks (default: false)',
                        ],
                        [
                          'format',
                          'string',
                          'Output: markdown, json, html',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: '#dcdcaa',
                      fontSize: '0.75rem',
                      color: '#0a0a0a',
                    }}
                  >
                    POST
                  </div>
                  <div className={styles.stepBody}>
                    <h4>
                      <code>/v1/deploy</code>
                    </h4>
                    <p>
                      Trigger a deployment to your configured environment.
                    </p>
                    <ParamTable
                      rows={[
                        [
                          'environment',
                          'string (required)',
                          'production, staging, or preview',
                        ],
                        ['region', 'string', 'Target region'],
                        [
                          'skipTests',
                          'boolean',
                          'Skip test suite (default: false)',
                        ],
                        [
                          'autoRollback',
                          'boolean',
                          'Auto-rollback on failure (default: true)',
                        ],
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNum}
                    style={{
                      background: '#6a9955',
                      fontSize: '0.75rem',
                    }}
                  >
                    AUTH
                  </div>
                  <div className={styles.stepBody}>
                    <h4>Authentication</h4>
                    <CodeBlock
                      lines={[
                        {
                          text: '# All API requests require an API key',
                          cls: 'comment',
                        },
                        {
                          text: 'Authorization: Bearer ca_live_xxxxxxxxxxxxxxxxxxxxxxxxxx',
                          cls: 'keyword',
                        },
                        { text: '', cls: '' },
                        {
                          text: '# Generate a key:',
                          cls: 'comment',
                        },
                        {
                          text: 'code-ai api-keys create --name "production" --env production',
                          cls: 'cmd',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className={styles.tip}>
                  <strong>Rate Limits:</strong> Starter: 100 req/min | Pro:
                  1,000 req/min | Enterprise: 10,000 req/min.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
