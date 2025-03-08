<div>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header">Write-Only Query Structure</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>[USE]{"\n"}</span>[CREATE]{"\n"}
                    {/* */}[MERGE [ON CREATE ...] [ON MATCH ...]]{"\n"}
                    {/* */}[WITH [ORDER BY] [SKIP] [LIMIT] [WHERE]]{"\n"}
                    {/* */}[SET]{"\n"}
                    {/* */}[DELETE]{"\n"}
                    {/* */}[REMOVE]{"\n"}
                    {/* */}[RETURN [ORDER BY] [SKIP] [LIMIT]]
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="openblock description">
          <div className="content">
            <div className="paragraph">
              <p>Baseline for write operations.</p>
            </div>
            <div className="ulist">
              <ul>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/create/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            CREATE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/merge/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            MERGE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/with/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            WITH
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/set/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            SET
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/delete/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            DELETE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/remove/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            REMOVE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/return/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            RETURN
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header">Read-Write Query Structure</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>[USE]{"\n"}</span>[MATCH [WHERE]]{"\n"}
                    {/* */}[OPTIONAL MATCH [WHERE]]{"\n"}
                    {/* */}[WITH [ORDER BY] [SKIP] [LIMIT] [WHERE]]{"\n"}
                    {/* */}[CREATE]{"\n"}
                    {/* */}[MERGE [ON CREATE ...] [ON MATCH ...]]{"\n"}
                    {/* */}[WITH [ORDER BY] [SKIP] [LIMIT] [WHERE]]{"\n"}
                    {/* */}[SET]{"\n"}
                    {/* */}[DELETE]{"\n"}
                    {/* */}[REMOVE]{"\n"}
                    {/* */}[RETURN [ORDER BY] [SKIP] [LIMIT]]
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="openblock description">
          <div className="content">
            <div className="paragraph">
              <p>Baseline for pattern search and write operations.</p>
            </div>
            <div className="ulist">
              <ul>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/use/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            USE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/match/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            MATCH
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/optional-match/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            OPTIONAL MATCH
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/create/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            CREATE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/merge/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            MERGE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/with/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            WITH
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/set/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            SET
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/delete/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            DELETE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/remove/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            REMOVE
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="ndl-text-link"
                      href="https://neo4j.com/docs/cypher-manual/5/clauses/return/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <code className="n-code">
                          <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                            RETURN
                          </span>
                        </code>
                      </span>
                    </a>{" "}
                    clause.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header" />
      <div className="group flex items-center">
        <p className="section-header">CREATE</p>
        <a
          href="https://neo4j.com/docs/cypher-manual/5/clauses/create/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 opacity-0 focus:opacity-100 group-hover:opacity-100"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-palette-primary-text block"
          >
            <path
              d="M4.49969 19.4992L19.4981 4.50079M19.5 18.6416L19.5 4.50111L5.35951 4.50111"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      CREATE (n:Label {"{"}name: $value{"}"})
                    </span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Create a node with the given label and properties.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>CREATE (n:Label $map)</span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Create a node with the given label and properties.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>CREATE (n:Label)-[r:TYPE]-&gt;(m:Label)</span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Create a relationship with the given relationship type and
            direction; bind a variable{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                r
              </span>
            </code>{" "}
            to it.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      CREATE (n:Label)-[:TYPE {"{"}name: $value{"}"}
                      ]-&gt;(m:Label)
                    </span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Create a relationship with the given type, direction, and
            properties.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      CREATE (greta:$($nodeLabels) {"{"}name: 'Greta Gerwig'
                      {"}"}){"\n"}
                    </span>
                    WITH greta{"\n"}
                    {/* */}UNWIND $movies AS movieTitle{"\n"}
                    {/* */}CREATE (greta)-[rel:$($relType)]-&gt;(m:Movie {"{"}
                    title: movieTitle{"}"}){"\n"}
                    {/* */}RETURN greta.name AS name, labels(greta) AS labels,
                    type(rel) AS relType, collect(m.title) AS movies
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Node labels and relationship types can be referenced dynamically in
            expressions, parameters, and variables when merging nodes and
            relationships. The expression must evaluate to a{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                STRING NOT NULL | LIST&lt;STRING NOT NULL&gt; NOT NULL
              </span>
            </code>{" "}
            value.
          </p>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header" />
      <div className="group flex items-center">
        <p className="section-header">SET</p>
        <a
          href="https://neo4j.com/docs/cypher-manual/5/clauses/set/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 opacity-0 focus:opacity-100 group-hover:opacity-100"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-palette-primary-text block"
          >
            <path
              d="M4.49969 19.4992L19.4981 4.50079M19.5 18.6416L19.5 4.50111L5.35951 4.50111"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>SET e.property1 = $value1</span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Update or create a property.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>SET{"\n"}</span>
                    {"  "}e.property1 = $value1,{"\n"}
                    {/* */}
                    {"  "}e.property2 = $value2
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Update or create several properties.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n){"\n"}</span>SET n[$key] = value
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Dynamically set or update node properties.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n){"\n"}</span>SET n:$($label)
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Dynamically set node labels.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>SET e = $map</span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Set all properties. This will remove any existing properties.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      SET e = {"{"}
                      {"}"}
                    </span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Using the empty map (
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                {"{"}
                {"}"}
              </span>
            </code>
            ), removes any existing properties.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>SET e += $map</span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Add and update properties, while keeping existing ones.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label){"\n"}</span>WHERE n.id = 123{"\n"}
                    {/* */}SET n:Person
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Add a label to a node. This example adds the label{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                Person
              </span>
            </code>{" "}
            to a node.
          </p>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header" />
      <div className="group flex items-center">
        <p className="section-header">MERGE</p>
        <a
          href="https://neo4j.com/docs/cypher-manual/5/clauses/merge/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 opacity-0 focus:opacity-100 group-hover:opacity-100"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-palette-primary-text block"
          >
            <path
              d="M4.49969 19.4992L19.4981 4.50079M19.5 18.6416L19.5 4.50111L5.35951 4.50111"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      MERGE (n:Label {"{"}name: $value{"}"}){"\n"}
                    </span>
                    ON CREATE SET n.created = timestamp(){"\n"}
                    {/* */}ON MATCH SET{"\n"}
                    {/* */}
                    {"  "}n.counter = coalesce(n.counter, 0) + 1,{"\n"}
                    {/* */}
                    {"  "}n.accessTime = timestamp()
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Match a pattern or create it if it does not exist. Use{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                ON CREATE
              </span>
            </code>{" "}
            and{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                ON MATCH
              </span>
            </code>{" "}
            for conditional updates.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH{"\n"}</span>
                    {"  "}(a:Person {"{"}name: $value1{"}"}),{"\n"}
                    {/* */}
                    {"  "}(b:Person {"{"}name: $value2{"}"}){"\n"}
                    {/* */}MERGE (a)-[r:LOVES]-&gt;(b)
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                MERGE
              </span>
            </code>{" "}
            finds or creates a relationship between the nodes.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      MATCH (a:Person {"{"}name: $value1{"}"})
                    </span>
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                MERGE
              </span>
            </code>{" "}
            finds or creates paths attached to the node.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      MERGE (greta:$($nodeLabels) {"{"}name: 'Greta Gerwig'{"}"}
                      ){"\n"}
                    </span>
                    WITH greta{"\n"}
                    {/* */}UNWIND $movies AS movieTitle{"\n"}
                    {/* */}MERGE (greta)-[rel:$($relType)]-&gt;(m:Movie {"{"}
                    title: movieTitle{"}"}){"\n"}
                    {/* */}RETURN greta.name AS name, labels(greta) AS labels,
                    type(rel) AS relType, collect(m.title) AS movies
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Node labels and relationship types can be referenced dynamically in
            expressions, parameters, and variables when merging nodes and
            relationships. The expression must evaluate to a{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                STRING NOT NULL | LIST&lt;STRING NOT NULL&gt; NOT NULL
              </span>
            </code>{" "}
            value.
          </p>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header" />
      <div className="group flex items-center">
        <p className="section-header">DELETE</p>
        <a
          href="https://neo4j.com/docs/cypher-manual/5/clauses/delete/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 opacity-0 focus:opacity-100 group-hover:opacity-100"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-palette-primary-text block"
          >
            <path
              d="M4.49969 19.4992L19.4981 4.50079M19.5 18.6416L19.5 4.50111L5.35951 4.50111"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label)-[r]-&gt;(m:Label){"\n"}</span>WHERE
                    r.id = 123{"\n"}
                    {/* */}DELETE r
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Delete a relationship.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH ()-[r]-&gt;(){"\n"}</span>DELETE r
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Delete all relationships.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label){"\n"}</span>WHERE n.id = 123{"\n"}
                    {/* */}DETACH DELETE n
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Delete a node and all relationships connected to it.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label)-[r]-(){"\n"}</span>WHERE r.id = 123
                    AND n.id = 'abc'{"\n"}
                    {/* */}DELETE n, r
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            Delete a node and a relationship. An error will be thrown if the
            given node is attached to more than one relationship.
          </p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      MATCH (n1:Label)-[r {"{"}id: 123{"}"}]-&gt;(n2:Label)
                      {"\n"}
                    </span>
                    CALL (n1) {"{"}
                    {"\n"}
                    {/* */}
                    {"  "}MATCH (n1)-[r1]-(){"\n"}
                    {/* */}
                    {"  "}RETURN count(r1) AS rels1{"\n"}
                    {/* */}
                    {"}"}
                    {"\n"}
                    {/* */}CALL (n2) {"{"}
                    {"\n"}
                    {/* */}
                    {"  "}MATCH (n2)-[r2]-(){"\n"}
                    {/* */}
                    {"  "}RETURN count(r2) AS rels2{"\n"}
                    {/* */}
                    {"}"}
                    {"\n"}
                    {/* */}DELETE r{"\n"}
                    {/* */}RETURN{"\n"}
                    {/* */}
                    {"  "}n1.name AS node1, rels1 - 1 AS relationships1,{"\n"}
                    {/* */}
                    {"  "}n2.name AS node2, rels2 - 1 AS relationships2
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="openblock description">
          <div className="content">
            <div className="paragraph">
              <p>
                Delete a relationship and return the number of relationships for
                each node after the deletion. This example uses a{" "}
                <a
                  className="ndl-text-link"
                  href="https://neo4j.com/docs/cypher-manual/current/subqueries/call-subquery/#variable-scope-clause"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>variable scope clause</span>
                </a>{" "}
                (introduced in Neo4j 5.23) to import variables into the{" "}
                <code className="n-code">
                  <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                    CALL
                  </span>
                </code>{" "}
                subquery. If you are using an older version of Neo4j, use an{" "}
                <a
                  className="ndl-text-link"
                  href="https://neo4j.com/docs/cypher-manual/current/subqueries/call-subquery/#importing-with"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    importing{" "}
                    <code className="n-code">
                      <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                        WITH
                      </span>
                    </code>{" "}
                    clause
                  </span>
                </a>{" "}
                instead.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n){"\n"}</span>DETACH DELETE n
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Delete all nodes and relationships from the database.</p>
        </div>
      </div>
    </div>
  </details>
  <details className="n-body-medium group">
    <summary className="hover:n-bg-palette-neutral-hover flex w-full cursor-pointer list-none rounded-lg px-3 py-1 group-open:font-bold">
      <p className="section-header" />
      <div className="group flex items-center">
        <p className="section-header">REMOVE</p>
        <a
          href="https://neo4j.com/docs/cypher-manual/5/clauses/remove/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 opacity-0 focus:opacity-100 group-hover:opacity-100"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-palette-primary-text block"
          >
            <path
              d="M4.49969 19.4992L19.4981 4.50079M19.5 18.6416L19.5 4.50111L5.35951 4.50111"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Collapse section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto hidden group-open:block"
      >
        <title>Collapse section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        aria-label="Expand section"
        className="ndl-icon-svg text-neutral-40 n-size-token-6 my-auto ml-auto block group-open:hidden"
      >
        <title>Expand section</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </summary>
    <div className="border-palette-neutral-border-weak my-2 flex h-full max-h-full min-h-0 w-full flex-grow basis-0 flex-col overflow-y-auto border-l pl-3 pr-2 [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc">
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label){"\n"}</span>WHERE n.id = 123{"\n"}
                    {/* */}REMOVE n:Label
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Remove a label from a node.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>
                      MATCH (n {"{"}name: 'Peter'{"}"}){"\n"}
                    </span>
                    REMOVE n:$($label){"\n"}
                    {/* */}RETURN n.name
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Dynamically remove node labels.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label){"\n"}</span>WHERE n.id = 123{"\n"}
                    {/* */}REMOVE n.alias
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Remove a property from a node.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n){"\n"}</span>REMOVE n[$key]
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>Dynamically remove properties from nodes.</p>
        </div>
      </div>
      <div
        className="mb-2 pb-2 border-b last:border-b-0 border-palette-neutral-border-weak"
        data-role="example"
      >
        <div
          className="ndl-code-block-container listing-block mb-1 min-h-0 w-full cursor-pointer pr-6"
          style={{ height: "undefinedpx" }}
        >
          <div className="n-flex n-flex-col n-h-full">
            <div
              className="ndl-code-content-container"
              style={{ height: "100%" }}
            >
              <div className="ndl-code-pseudo-element" />
              <div
                className="ndl-highlight-wrapper"
                role="textbox"
                aria-label="code-snippet"
                tabIndex={0}
              >
                <pre
                  style={{
                    color: "rgb(var(--theme-palette-neutral-text-default))",
                    lineHeight: 1,
                    width: "fit-content",
                    border: 0,
                    padding: "0 44px 0.75em 0.75em"
                  }}
                >
                  <code className="n-code" style={{ whiteSpace: "pre" }}>
                    <span>MATCH (n:Label){"\n"}</span>WHERE n.id = 123{"\n"}
                    {/* */}SET n = {"{"}
                    {"}"} # REMOVE ALL properties
                  </code>
                </pre>
              </div>
              <div className="ndl-code-pseudo-element" />
            </div>
          </div>
          <div className="ndl-code-block-actions">
            <button
              aria-label="Copy to clipboard"
              className="ndl-icon-btn ndl-small ndl-clean"
              data-testid="ndl-action-button-0"
              title="Copy to clipboard"
              data-role="cypher-ref-copy-button"
            >
              <div className="ndl-icon">
                <div className="relative">
                  <div
                    className="ndl-tooltip-content ndl-theme-light n-body-small !left-[initial] !right-[24px] !top-[-5px] hidden whitespace-nowrap ndl-tooltip-content-simple"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    tabIndex={-1}
                    data-floating-ui-focusable=""
                    id=":Re:"
                    role="tooltip"
                  >
                    <span className="n-body-medium">Copied to clipboard!</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ndl-icon-svg undefined"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="paragraph description">
          <p>
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                REMOVE
              </span>
            </code>{" "}
            cannot be used to remove all existing properties from a node or
            relationship. All existing properties can be removed from a node or
            relationship by using the{" "}
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                SET
              </span>
            </code>{" "}
            clause with the property replacement operator (
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                =
              </span>
            </code>
            ) and an empty map (
            <code className="n-code">
              <span className="n-bg-palette-neutral-bg-default rounded-sm px-1">
                {"{"}
                {"}"}
              </span>
            </code>
            ) as the right operand.
          </p>
        </div>
      </div>
    </div>
  </details>
</div>








