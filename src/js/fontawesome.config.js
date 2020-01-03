import { library, dom, config } from '@fortawesome/fontawesome-svg-core';

config.autoReplaceSvg = 'nest';

import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faSquare, faCheck, faUserCircle, faMinusSquare);
dom.watch();