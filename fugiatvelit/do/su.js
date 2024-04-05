const { gasUsed } = effects;

const main = async () => {
  const gasUsage = await gasUsed();
  console.log(`Gas used: ${gasUsage}`);
};
