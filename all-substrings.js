var allSubstrings = function (s) {
  const SIZE = s.length;
  if (!s || SIZE < 1) {
    return 0;
  }

  if (SIZE === 1) {
    return 1
  }

  let head = 0;
  let tail = 0;
  const seen = new Set();

  const collected = [];
  let currentResult = 0;

  while (tail < SIZE) {
    // console.log({ tail, head }, seen, s[head])
    if (head === SIZE - 1) {
      console.log('resetting head', { head })
      seen.add(s[head]);
      if (seen.size > 0) {
        collected.push(new Set(seen));
        seen.clear();
      }
      tail++;
      head = tail; //reset head
      continue;
    }
    if (seen.has(s[head])) {
      // console.log(`resetting head: seen.has(${s[head]})`, { head})
      collected.push(new Set(seen));
      seen.clear();
      tail++;
      head = tail; //reset head
    }
    // console.log({head, tail}, s[head])
    seen.add(s[head]);
    head++;
  }
  return collected
}
