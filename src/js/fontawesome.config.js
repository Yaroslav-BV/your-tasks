import { library, dom, config } from '@fortawesome/fontawesome-svg-core';

config.autoReplaceSvg = 'nest';

import { faCheck, faMinus, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faMinus, faUserCircle);
dom.watch();