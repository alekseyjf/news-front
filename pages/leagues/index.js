import React from "react";
import {withRouter} from "next/router";
import LeagueModule from "desktop/module/front/league"

class Leagues extends React.Component {
  render() {
    return (
      <div>
        {LeagueModule.getView(this.props)}
      </div>
    )
  }

}

Leagues.getInitialProps = async (ctx, props) => {
  return LeagueModule.getServerSideProps(ctx, props)
};

export default withRouter(Leagues);
