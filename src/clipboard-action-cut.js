import select from 'select';
import command from './common/command';

const ClipboardActionCut = (target) => {
  const selectedText = select(target);
  command('cut');
  return selectedText;
};

export default ClipboardActionCut;
