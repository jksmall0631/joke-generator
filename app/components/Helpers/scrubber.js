const APIScrubber = (joke) => {
  let scrubbed = joke.replace(/&quot;/g, '"');
  return scrubbed;
}

export default APIScrubber;
