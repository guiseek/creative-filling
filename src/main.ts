import {loadFont} from '@shared/utils'
import {app} from './features'
import './style.scss'

loadFont('Mukta', [400, 600, 800]).then(app)
