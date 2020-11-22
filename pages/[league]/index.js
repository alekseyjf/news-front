import React from "react";
import {withRouter} from "next/router";
import LeagueModule from "desktop/module/front/league"

class Leagues extends React.Component {
  constructor(props) {
    super(props);
    this.LeagueModule = LeagueModule
  }

  render() {
    return (
      <div>

        {/*<h1>Страница Работает, работаем дальше</h1>*/}

        {this.LeagueModule.getView(this.props)}
      </div>
    )
  }

}

Leagues.getInitialProps = async (ctx, props) => {
  return LeagueModule.getServerSideProps(ctx, props)
};

export default withRouter(Leagues);
