import React from 'react'

import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { detail } from '../../../actions/detail'
import { mark } from '../../../actions/mark'
import { score } from '../../../actions/score'
import { getDetail, getScore } from '../../../reducers/detail'

import Meta from '../../../components/meta'

import CSSModules from 'react-css-modules'
import styles from './index.scss';

@withRouter
@connect(
  (state, props) => ({
    info: getDetail(state, props.match.params.id)
  }),
  dispatch => ({
    detail: bindActionCreators(detail, dispatch),
    mark: bindActionCreators(mark, dispatch),
    getCm:  bindActionCreators(score, dispatch),
  })
)
@CSSModules(styles, { allowMultiple: true })
export class Detail extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { match: { params: { id } }, info, detail, getCm, sid = 1, uid } = this.props

    if (!info || !info.data) {
      detail({ id })
    }
    if (!score || !score.data) {
      getCm({ id, sid, uid })
    }

  }

  addMark(type, id, cid, uid) {
    console.log(type, id, cid, uid)
  }

  render() {
    const { info: { data = {}, loading }, isMeta, subTitle, uid } = this.props
    const { id, cid, name, content, pic, actor, area, aliases, gold, update_date, filmtime, total, director, type, language } = data
    // console.log(love, remind)
    const meta = {
      name: {
        keywords: name
      },
      property: {
        'og:type': 'videolist',
        'og:title': name,
        'og:description': content,
        'og:image': pic,
        'og:url': `/bangumi/${id}`,
        'og:video': `/play/${id}/1`
      }
    }
    return(
      <div styleName="detail">
        { loading ? <div>loading...</div> : null }
        { isMeta ? <Meta title={name} keywords={name} description={name} meta={meta} /> : null }
        {/* <div styleName='blur' style={{backgroundImage: `url(${pic})`}}></div> */}
        <div styleName='detail-con' className='clearfix'>
          <h1><Link to={`/bangumi/${data.id}`}>{ name }</Link>{ subTitle ? ` ${subTitle}` : null }</h1>
          {/* <div styleName="pic"><img src={pic} /></div> */}
          <div styleName='info'>
            <p></p>
          </div>
          <div styleName='score'>{gold}</div>
        </div>
        <div onClick={() => this.addMark('love', id, cid, uid)}>收藏</div>
        <div onClick={() => this.addMark('remind', id, cid, uid)}>订阅</div>
      </div>
    )
  }
}

export default Detail;
