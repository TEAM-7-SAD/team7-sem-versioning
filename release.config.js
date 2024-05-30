const config = {
  branches: ["development"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
  tagFormat: "${version}-alpha",
};

module.exports = config;
