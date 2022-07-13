export const formatWithDate = arr => {
  if (!arr?.length) {
    return [];
  }
  const map = {};
  arr?.forEach(r => {
    const dt = r?.date;
    // map[dt] = [r];
    map[dt] = map[dt] ? [...map[dt], r] : [r];
    // console.log(map, '>>>>>>>>>', map[dt]);
  });
  return Object.entries(map).map(([key, values]) => ({
    date: key,
    data: values,
  }));
};
