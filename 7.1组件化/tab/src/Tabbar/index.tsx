import React, { Component } from 'react';
import './index.css';

const defaultTabs = [
  { title: 'tab1', content: 'tab1' }, 
  { title: 'tab2', content: 'tab2' }, 
  { title: 'tab3', content: 'tab3' }
]

interface Props {
  tabs: Array<{title: string, content: string}>
}

class Tab extends Component<Props> {
  state = {
    index: 0
  }

  static defaultProps = {
    tabs: defaultTabs
  }

  switchTab = (index: number) => {
    this.setState({
      index
    })
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="tab_container">
        <div className="titles">
          {tabs.map((tab, m) => (
            <div
              className={m === index ? 'item active' : 'item'}
              key={m}
              onClick={() => this.switchTab(m)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="contents">
          {tabs.map((tab, n) => (
            <div className={n === index ? 'item active' : 'item'} key={n}>{tab.content}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tab;