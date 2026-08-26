import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Installation Guide — Resolvr",
  description:
    "How to install Resolvr on Windows, macOS, and Linux — developer checkout vs. installed mode, PATH setup, RESOLVR_API_KEY, uninstalling, upgrading, and the packaging security model.",
};

const TOC: { id: string; label: string }[] = [
  { id: "windows-installation", label: "Windows installation" },
  { id: "macos-installation", label: "macOS installation" },
  { id: "linux-installation", label: "Linux installation" },
  { id: "portable-linux-installation", label: "Portable Linux installation" },
  { id: "path", label: "PATH" },
  { id: "start-stop-status-doctor", label: "start / stop / status / doctor" },
  { id: "resolvr-api-key", label: "RESOLVR_API_KEY" },
  { id: "github-authentication", label: "GitHub authentication" },
  { id: "uninstall", label: "Uninstall" },
  { id: "upgrades", label: "Upgrades" },
  { id: "developer-checkout-vs-installed-mode", label: "Checkout vs. installed mode" },
  { id: "security", label: "Security" },
  { id: "signing", label: "Signing" },
  { id: "limitations-this-phase", label: "Limitations (this phase)" },
];

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-display text-[22px] font-bold tracking-tight text-text-primary sm:text-[26px]"
    >
      {children}
    </h2>
  );
}

function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 font-display text-[17px] font-bold tracking-tight text-text-primary"
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[14.5px] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

function C({ children }: { children: ReactNode }) {
  return (
    <code className="glass rounded-md px-1.5 py-0.5 font-mono text-[12.5px] text-accent-coral">
      {children}
    </code>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-accent-sage underline decoration-accent-sage/30 underline-offset-2 transition-colors hover:text-accent-coral"
    >
      {children}
    </a>
  );
}

function CodeBlock({ children, lang }: { children: string; lang?: string }) {
  return (
    <div className="skeuo-terminal overflow-x-auto rounded-xl px-4 py-3.5">
      {lang ? (
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-tertiary">
          {lang}
        </p>
      ) : null}
      <pre className="font-mono text-[12.5px] leading-relaxed text-text-primary">
        {children}
      </pre>
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="neu rounded-xl px-4 py-3.5 text-[13.5px] leading-relaxed text-text-primary">
      {children}
    </div>
  );
}

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="glass-strong overflow-x-auto rounded-2xl">
      <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-glass-border">
            {head.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-text-tertiary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 1 ? "bg-black/[0.02]" : undefined}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 align-top text-text-secondary"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export default function InstallationGuidePage() {
  return (
    <main id="main" className="flex flex-1 flex-col pt-20">
      <section className="relative w-full px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-sage" />
              Documentation
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              Installation
            </h1>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <Reveal delay={0.06} className="hidden lg:block">
              <nav className="glass sticky top-28 flex flex-col gap-0.5 rounded-2xl p-3">
                {TOC.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-lg px-3 py-2 text-[12.5px] text-text-secondary transition-colors hover:bg-white/40 hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Reveal>

            <Reveal delay={0.1} className="flex max-w-2xl flex-col gap-14">
              <Section>
                <P>Two ways to run Resolvr:</P>
                <ul className="flex flex-col gap-3 pl-1">
                  <li className="text-[14.5px] leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">
                      Developer checkout
                    </span>{" "}
                    — clone the repo, build with Maven, run via{" "}
                    <C>bin/resolvr</C>. Unchanged by this document; see{" "}
                    <C>docs/DEVELOPMENT.md</C>. Needs Git, Maven (or the
                    bundled <C>mvnw</C>), and a JDK on <C>PATH</C>/
                    <C>JAVA_HOME</C>.
                  </li>
                  <li className="text-[14.5px] leading-relaxed text-text-secondary">
                    <span className="font-semibold text-text-primary">
                      Installed mode
                    </span>{" "}
                    — a platform installer (MSI/pkg/deb/rpm) or a portable
                    tarball, built by <C>.github/workflows/release-cli.yml</C>{" "}
                    from a <C>cli-v*</C> tag. Needs none of the above: the
                    installer bundles its own JVM (via <C>jlink</C>) and the
                    pre-built server, so there&apos;s no Maven, no Git, no
                    source checkout, and no system Java involved at all.
                  </li>
                </ul>
                <P>
                  Both modes run the exact same server code, in the exact
                  same fail-closed launch mode — see{" "}
                  <A href="#developer-checkout-vs-installed-mode">
                    Developer checkout vs. installed mode
                  </A>{" "}
                  below.
                </P>
              </Section>

              <Section>
                <H2 id="windows-installation">Windows installation</H2>
                <ol className="flex flex-col gap-2 pl-5 text-[14.5px] leading-relaxed text-text-secondary [list-style:decimal]">
                  <li>
                    Download <C>resolvr-cli-&lt;version&gt;-win-x64.msi</C>{" "}
                    from the release&apos;s assets.
                  </li>
                  <li>
                    Run it. It installs under <C>Program Files\Resolvr</C> by
                    default (the installer&apos;s directory chooser lets you
                    pick a different location) and adds Start Menu / desktop
                    shortcuts.
                  </li>
                  <li>
                    Open a terminal and run <C>resolvr doctor</C> (see{" "}
                    <A href="#path">PATH</A> below if that&apos;s not found
                    yet).
                  </li>
                </ol>
                <P>
                  The installer is currently{" "}
                  <span className="font-semibold text-text-primary">
                    unsigned
                  </span>{" "}
                  — see <A href="#signing">Signing</A>. Windows SmartScreen
                  will show an &quot;unrecognized publisher&quot; warning;
                  choose &quot;More info&quot; → &quot;Run anyway&quot; to
                  proceed.
                </P>
              </Section>

              <Section>
                <H2 id="macos-installation">macOS installation</H2>
                <ol className="flex flex-col gap-2 pl-5 text-[14.5px] leading-relaxed text-text-secondary [list-style:decimal]">
                  <li>
                    Download{" "}
                    <C>resolvr-cli-&lt;version&gt;-macos-x64.pkg</C> (Intel)
                    or{" "}
                    <C>resolvr-cli-&lt;version&gt;-macos-arm64.pkg</C> (Apple
                    Silicon) — use <C>uname -m</C> if unsure (
                    <C>x86_64</C> → x64, <C>arm64</C> → arm64).
                  </li>
                  <li>
                    Run it. It installs under <C>/Applications/resolvr</C> (a
                    jpackage app-image, not a <C>.app</C> bundle you&apos;d
                    launch by double-clicking — this is a CLI tool).
                  </li>
                  <li>
                    Open a terminal and run <C>resolvr doctor</C> (see{" "}
                    <A href="#path">PATH</A> below).
                  </li>
                </ol>
                <P>
                  The package is currently{" "}
                  <span className="font-semibold text-text-primary">
                    unsigned and not notarized
                  </span>{" "}
                  — see <A href="#signing">Signing</A>. Gatekeeper will
                  refuse to open it with an &quot;unidentified
                  developer&quot; message. Right-click (or Ctrl-click) the
                  installer in Finder → &quot;Open&quot; → &quot;Open&quot;
                  to bypass this for a one-time manual install, or run{" "}
                  <C>xattr -d com.apple.quarantine &lt;path-to-pkg&gt;</C>{" "}
                  before running it.
                </P>
              </Section>

              <Section>
                <H2 id="linux-installation">Linux installation</H2>
                <P>Debian/Ubuntu:</P>
                <CodeBlock lang="sh">
                  {"sudo dpkg -i resolvr-cli-<version>-linux-x64.deb"}
                </CodeBlock>
                <P>Fedora/RHEL/openSUSE:</P>
                <CodeBlock lang="sh">
                  {"sudo rpm -i resolvr-cli-<version>-linux-x64.rpm"}
                </CodeBlock>
                <P>
                  Both install under <C>/opt/resolvr</C> and add a menu
                  entry. Neither package is currently signed — see{" "}
                  <A href="#signing">Signing</A>.
                </P>
              </Section>

              <Section>
                <H2 id="portable-linux-installation">
                  Portable Linux installation
                </H2>
                <P>No package manager, no root required:</P>
                <CodeBlock lang="sh">
                  {`tar -xzf resolvr-cli-<version>-linux-x64.tar.gz    # or -linux-arm64.tar.gz
./resolvr/bin/resolvr doctor`}
                </CodeBlock>
                <P>
                  This is a self-contained app-image (bundled JVM included)
                  — extract it anywhere and run <C>bin/resolvr</C> directly,
                  or add <C>&lt;extracted-dir&gt;/bin</C> to <C>PATH</C> (see
                  below).
                </P>
                <Callout>
                  <span className="font-semibold">
                    Linux ARM64 ships tar.gz only
                  </span>{" "}
                  — no <C>.deb</C>/<C>.rpm</C> for that architecture in this
                  phase. See{" "}
                  <A href="#limitations-this-phase">
                    Limitations (this phase)
                  </A>
                  .
                </Callout>
              </Section>

              <Section>
                <H2 id="path">PATH</H2>
                <P>
                  The <C>.deb</C>/<C>.rpm</C>/<C>.pkg</C> installers do{" "}
                  <span className="font-semibold text-text-primary">
                    not
                  </span>{" "}
                  currently add their install directory to <C>PATH</C>{" "}
                  automatically — this needs hand-authored platform
                  installer scripting (a WiX fragment on Windows, a
                  postinst script on Linux) that&apos;s out of scope for
                  this phase. Add it manually:
                </P>
                <Table
                  head={["Platform", "Binary", "Suggested PATH entry"]}
                  rows={[
                    [
                      "Windows",
                      <C key="w">{"<install-dir>\\resolvr.exe"}</C>,
                      <>
                        Add <C>{"<install-dir>"}</C> to your user or system{" "}
                        <C>PATH</C> (Settings → System → About → Advanced
                        system settings → Environment Variables)
                      </>,
                    ],
                    [
                      "macOS",
                      <C key="m">/Applications/resolvr/bin/resolvr</C>,
                      <C key="mc">
                        {
                          'echo \'export PATH="/Applications/resolvr/bin:$PATH"\' >> ~/.zshrc'
                        }
                      </C>,
                    ],
                    [
                      "Linux (deb/rpm)",
                      <C key="l">/opt/resolvr/bin/resolvr</C>,
                      <C key="lc">
                        {
                          'echo \'export PATH="/opt/resolvr/bin:$PATH"\' >> ~/.bashrc'
                        }
                      </C>,
                    ],
                    [
                      "Linux (portable tarball)",
                      <C key="t">{"<extracted-dir>/bin/resolvr"}</C>,
                      "same, pointed at wherever you extracted it",
                    ],
                  ]}
                />
                <P>Until then, you can always invoke the full path directly.</P>
              </Section>

              <Section>
                <H2 id="start-stop-status-doctor">
                  start / stop / status / doctor
                </H2>
                <P>
                  Identical commands and output shape in both installed and
                  developer-checkout mode:
                </P>
                <CodeBlock lang="sh">
                  {`resolvr doctor     # environment/config sanity check — run this first
resolvr start       # starts the server as a background process, waits for /q/health
resolvr status       # process, health, port, MCP endpoint, RESOLVR_API_KEY/GITHUB_TOKEN presence
resolvr stop        # stops the process Resolvr itself started`}
                </CodeBlock>
                <P>
                  <C>status</C>/<C>doctor</C> report which mode they
                  detected — <C>Mode: installed (&lt;install root&gt;)</C> or{" "}
                  <C>Mode: developer checkout (&lt;repo root&gt;)</C>.
                </P>
                <P>
                  One installed-mode difference: <C>resolvr dev</C> (the
                  live-reload dev server) is{" "}
                  <span className="font-semibold text-text-primary">
                    not available
                  </span>{" "}
                  from an installed copy — dev mode needs a source checkout
                  to reload from. Running it from an installed copy prints an
                  explanatory error and exits; use <C>start</C>/<C>stop</C>/
                  <C>status</C> instead.
                </P>
                <P>
                  Installed-mode state (PID file, log) lives in a per-user,
                  always-writable location rather than under the install
                  directory (which commonly requires elevated privileges to
                  write to, e.g. <C>{"C:\\Program Files\\..."}</C>):
                </P>
                <Table
                  head={["Platform", "State directory"]}
                  rows={[
                    ["Windows", <C key="1">%LOCALAPPDATA%\Resolvr</C>],
                    [
                      "macOS",
                      <C key="2">
                        ~/Library/Application Support/Resolvr
                      </C>,
                    ],
                    [
                      "Linux",
                      <>
                        <C key="3">$XDG_STATE_HOME/resolvr</C> (falls back to{" "}
                        <C>~/.local/state/resolvr</C>)
                      </>,
                    ],
                  ]}
                />
              </Section>

              <Section>
                <H2 id="resolvr-api-key">RESOLVR_API_KEY</H2>
                <P>
                  Installed mode has no separate configuration story from a
                  developer checkout: <C>resolvr start</C> launches the
                  bundled server jar exactly as <C>-jar quarkus-run.jar</C>{" "}
                  (plus <C>-Dquarkus.http.port</C> if you&apos;ve set a
                  non-default port) and nothing else. The server itself
                  reads <C>RESOLVR_API_KEY</C>/<C>GITHUB_TOKEN</C> from the
                  process environment at startup, same as always.
                </P>
                <P>
                  <span className="font-semibold text-text-primary">
                    The installer does not set, generate, or prompt for
                    RESOLVR_API_KEY.
                  </span>{" "}
                  Set it yourself before running <C>resolvr start</C>, the
                  same way you would for a checkout:
                </P>
                <CodeBlock lang="macOS / Linux">
                  {'export RESOLVR_API_KEY="$(openssl rand -hex 32)"'}
                </CodeBlock>
                <CodeBlock lang="PowerShell">
                  {"$env:RESOLVR_API_KEY = -join ((1..32) | ForEach-Object { '{0:x2}' -f (Get-Random -Max 256) })"}
                </CodeBlock>
                <P>
                  If <C>RESOLVR_API_KEY</C> is unset, the server refuses to
                  start at all (<C>StartupSecurityCheck</C>) — this is
                  unchanged and unweakened in installed mode. See{" "}
                  <C>docs/SECURITY.md</C>.
                </P>
              </Section>

              <Section>
                <H2 id="github-authentication">GitHub authentication</H2>
                <P>
                  Same as a checkout: set <C>GITHUB_TOKEN</C> in the
                  environment before <C>resolvr start</C>, or (if the{" "}
                  <C>gh</C> CLI is installed and you&apos;ve run{" "}
                  <C>gh auth login</C>) leave it unset and the server falls
                  back to <C>gh auth token</C>. The installer does not touch
                  GitHub credentials in any way.
                </P>
              </Section>

              <Section>
                <H2 id="uninstall">Uninstall</H2>
                <ul className="flex flex-col gap-2.5 pl-1 text-[14.5px] leading-relaxed text-text-secondary">
                  <li>
                    <span className="font-semibold text-text-primary">
                      Windows
                    </span>
                    : Settings → Apps → &quot;resolvr&quot; → Uninstall (or
                    the MSI itself, run again).
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      macOS
                    </span>
                    : no uninstaller is bundled (jpackage <C>.pkg</C>{" "}
                    doesn&apos;t ship one) — remove{" "}
                    <C>/Applications/resolvr</C> manually:{" "}
                    <C>sudo rm -rf /Applications/resolvr</C>.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      Linux (deb)
                    </span>
                    : <C>sudo dpkg -r resolvr</C>
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      Linux (rpm)
                    </span>
                    : <C>sudo rpm -e resolvr</C>
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      Linux (portable tarball)
                    </span>
                    : delete the extracted directory.
                  </li>
                </ul>
                <P>
                  None of these remove your per-user state directory (PID
                  file/log — see the table above) or any environment
                  variables you&apos;ve set; remove those yourself if
                  desired.
                </P>
              </Section>

              <Section>
                <H2 id="upgrades">Upgrades</H2>
                <P>
                  There is no in-place auto-update. To upgrade:{" "}
                  <C>resolvr stop</C> (if running), then install the new
                  version the same way you installed the old one — the
                  Windows/macOS/Linux package installers replace the
                  previous install; for the portable tarball, extract the
                  new one over (or replacing) the old directory.
                </P>
              </Section>

              <Section>
                <H2 id="developer-checkout-vs-installed-mode">
                  Developer checkout vs. installed mode
                </H2>
                <Table
                  head={["", "Developer checkout", "Installed mode"]}
                  rows={[
                    [
                      "Launcher",
                      <C key="l1">{"bin/resolvr / .cmd / .ps1"}</C>,
                      <>
                        native launcher (<C>resolvr.exe</C>, <C>resolvr</C>)
                      </>,
                    ],
                    ["Needs Maven/Git", "Yes (to build)", "No"],
                    [
                      "Needs system Java",
                      "Yes",
                      <>
                        No — bundles its own via <C>jlink</C>
                      </>,
                    ],
                    [
                      "Server launch command",
                      <C key="l2">
                        java -jar {"<repo>"}/target/quarkus-app/quarkus-run.jar
                      </C>,
                      <C key="l3">
                        {"<bundled-java>"} -jar {"<install>"}/.../quarkus-run.jar
                      </C>,
                    ],
                    [
                      "resolvr dev",
                      "Available",
                      "Refused (needs a source checkout to reload)",
                    ],
                    [
                      "Server security posture",
                      <>
                        Normal launch mode, fail-closed without{" "}
                        <C>RESOLVR_API_KEY</C>
                      </>,
                      <span
                        key="ident"
                        className="font-semibold text-text-primary"
                      >
                        Identical — see below
                      </span>,
                    ],
                  ]}
                />
                <P>
                  <C>RuntimeResolver</C> (in the CLI) decides which mode
                  applies at runtime by checking for{" "}
                  <C>jpackage.app-path</C> (set automatically by an installed
                  native launcher, absent from a checkout) — an installed
                  binary is never inside a git checkout, so there&apos;s no
                  real ambiguity. <C>RepoLocator</C>,{" "}
                  <C>PackagedJarLaunchSpec</C>, and{" "}
                  <C>QuarkusDevLaunchSpec</C> are unmodified by this phase
                  and continue to handle the checkout path exactly as
                  before.
                </P>
              </Section>

              <Section>
                <H2 id="security">Security</H2>
                <P>
                  Installed mode is not a separate, weaker security posture
                  — it reuses the same server, the same{" "}
                  <C>StartupSecurityCheck</C>, and the same{" "}
                  <C>ApiKeyAuthFilter</C> a developer checkout runs.
                  Specifically:
                </P>
                <ul className="flex flex-col gap-3 pl-1 text-[14.5px] leading-relaxed text-text-secondary">
                  <li>
                    <span className="font-semibold text-text-primary">
                      No credentials are embedded in any installer.
                    </span>{" "}
                    The packaged input (staged by{" "}
                    <C>cli/packaging/assemble-input.*</C>) is scanned by{" "}
                    <C>cli/packaging/validate-input.*</C> before jpackage
                    ever runs, checking for GitHub token shapes, PEM private
                    keys, and resolved (non-placeholder) API-key/dev-profile
                    JVM flags — the release workflow fails the build if any
                    are found.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      resolvr start in installed mode runs exactly
                    </span>{" "}
                    <C>
                      {"<bundled-java>"} -jar {"<bundled quarkus-run.jar>"}{" "}
                      [-Dquarkus.http.port=N]
                    </C>{" "}
                    — nothing else. <C>InstalledJarLaunchSpec</C> never adds
                    a <C>-Dquarkus.profile=dev</C> flag, never sets/overrides{" "}
                    <C>resolvr.api-key</C>, and never reads{" "}
                    <C>RESOLVR_API_KEY</C>/<C>GITHUB_TOKEN</C> to construct
                    the command (enforced by{" "}
                    <C>InstalledJarLaunchSpecTest</C>, including an
                    assertion that the command is a pure function of{" "}
                    <C>(layout, port)</C> — proving it can&apos;t vary based
                    on secret environment variables). <C>resolvr dev</C>{" "}
                    (which does relax auth, intentionally, for live-reload
                    development) is refused outright in installed mode, not
                    just left unwired.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      StartupSecurityCheck and ApiKeyAuthFilter are
                      unmodified by this phase.
                    </span>{" "}
                    A packaged server refuses to start without{" "}
                    <C>RESOLVR_API_KEY</C> regardless of which mode launched
                    it, and every route but <C>/q/health</C> requires a
                    valid <C>Authorization: Bearer &lt;key&gt;</C> regardless
                    of which mode launched it.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      The resolution/write architecture is unchanged.
                    </span>{" "}
                    <C>commit_and_push_resolution</C> is still the only
                    write path, still gated on explicit human approval — see{" "}
                    <C>docs/SECURITY.md</C>, which this document doesn&apos;t
                    duplicate.
                  </li>
                </ul>
              </Section>

              <Section>
                <H3 id="signing">Signing</H3>
                <P>
                  No Windows code-signing certificate or Apple Developer ID
                  was available when building this phase, and none was
                  invented. All installers are{" "}
                  <span className="font-semibold text-text-primary">
                    unsigned
                  </span>
                  :
                </P>
                <ul className="flex flex-col gap-2 pl-1 text-[14.5px] leading-relaxed text-text-secondary">
                  <li>
                    Windows: SmartScreen shows an &quot;unrecognized
                    publisher&quot; warning.
                  </li>
                  <li>
                    macOS: unsigned and unnotarized — Gatekeeper blocks it
                    by default (see{" "}
                    <A href="#macos-installation">macOS installation</A> for
                    the bypass).
                  </li>
                  <li>
                    Linux <C>.deb</C>/<C>.rpm</C>: unsigned packages — most
                    package managers will warn but still allow installation.
                  </li>
                </ul>
                <P>
                  The release workflow and <C>cli/packaging/</C> scripts are
                  structured so signing can be added later without
                  restructuring: see the commented placeholder blocks in{" "}
                  <C>.github/workflows/release-cli.yml</C> and the
                  per-platform notes in <C>cli/packaging/windows/</C>,{" "}
                  <C>cli/packaging/macos/</C>, and{" "}
                  <C>cli/packaging/linux/</C>.
                </P>
              </Section>

              <Section>
                <H2 id="limitations-this-phase">Limitations (this phase)</H2>
                <ul className="flex flex-col gap-3 pl-1 text-[14.5px] leading-relaxed text-text-secondary">
                  <li>
                    <span className="font-semibold text-text-primary">
                      No installer signing
                    </span>{" "}
                    — see <A href="#signing">Signing</A> above.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      No automatic PATH registration
                    </span>{" "}
                    — see <A href="#path">PATH</A> above.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      No auto-update mechanism
                    </span>{" "}
                    — see <A href="#upgrades">Upgrades</A> above.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      No macOS uninstaller
                    </span>{" "}
                    — <C>.pkg</C> doesn&apos;t ship one; remove manually.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      Linux ARM64 ships tar.gz only
                    </span>
                    , not <C>.deb</C>/<C>.rpm</C> — that was the target
                    artifact set requested for this phase, not a build
                    limitation.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      Linux ARM64 build depends on GitHub-hosted ARM64 Linux
                      runners
                    </span>{" "}
                    being available to this repository.{" "}
                    <C>release-cli.yml</C> targets them directly (
                    <C>ubuntu-24.04-arm</C>) rather than cross-compiling — a
                    real native build, not a faked one — but whether that
                    runner label is actually available depends on the
                    repository/organization&apos;s GitHub plan. If it
                    isn&apos;t, that one job fails independently (
                    <C>continue-on-error: true</C>) without blocking the
                    Windows/macOS/Linux-x64 artifacts or the release itself;
                    the release notes will simply be missing the arm64
                    tarball until it&apos;s confirmed available.
                  </li>
                  <li>
                    <span className="font-semibold text-text-primary">
                      GraalVM native-image is out of scope
                    </span>{" "}
                    for this phase — every installer bundles a{" "}
                    <C>jlink</C> JVM image plus ordinary jars, not an
                    ahead-of-time-compiled native binary.
                  </li>
                </ul>
              </Section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
