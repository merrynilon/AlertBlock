import { connect } from 'react-redux';
import classes from './AlertBlock.module.css';
import { alertStyles } from './AlertBlock.data';

const AlertBlock = ({ alerts }) => {
  return (
    <div className={classes.alertContainer}>
      {alerts.map((alert) => {
        const data = alertStyles[alert.alertType];
        return (
          <div
            key={alert.id}
            className={`${classes.alertMessage} ${data.className}`}
          >
            {data.header}
            <p className={classes.alertMessageText}>{alert.msg}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AlertBlock);
