import {loadFont} from '@shared/utils'
import {app} from './app'
import './style.scss'

loadFont('Mukta', [400, 600, 800]).then(app)
