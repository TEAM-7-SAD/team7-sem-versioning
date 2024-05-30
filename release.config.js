const config = {
  branches: [{ name: "development", prerelease: true }],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [],
        prerelease: true,
      },
    ],
  ],
  tagFormat: "${version}-alpha",
};

module.exports = config;
