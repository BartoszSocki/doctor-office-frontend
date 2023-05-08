const isEmpty = (val: string | null) => {
  return typeof val === "undefined" || val === null;
};

const isNotEmpty = (val: string | null) => !isEmpty(val);

export { isEmpty, isNotEmpty };
