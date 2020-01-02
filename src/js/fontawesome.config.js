import { library, dom, config } from '@fortawesome/fontawesome-svg-core';

config.autoReplaceSvg = 'nest';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);
dom.watch();