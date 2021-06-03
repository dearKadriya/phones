export default function phonesFormatter(phone) {
  const extraSymbolsCut = phone.replace(/[\s\D]/g, '');
  if (extraSymbolsCut.match(/^(79)|(89)/)) {
    return extraSymbolsCut.replace(/([^])/, '+7');
  } if (extraSymbolsCut.match(/^(86)/)) {
    return extraSymbolsCut.replace(/([^])/, '+8');
  }
  return extraSymbolsCut.replace(/([^])/, '+$1');
}
