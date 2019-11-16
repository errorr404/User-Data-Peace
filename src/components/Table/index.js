import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './table.scss';

class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rowData: [],
      clickedRow: null
    };
  }

  componentDidMount() {
    const { rowData } = this.props;
    this.setState({ rowData });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rowData !== this.props.rowData) {
      this.setState({ rowData: this.props.rowData });
    }
  }
  sortTable = (key) => {
    const { sortBy } = this.props;
    this.setState({ clickedRow: key });
    sortBy(key);
  };

  render() {
    const { headers } = this.props;
    const { rowData, clickedRow } = this.state;
    return (
      <table className="tableStyle">
        <thead>
          <tr>
            {headers.map(
              (header) =>
                header !== 'id' && (
                  <th onClick={() => this.sortTable(header)} key={header.id}>
                    {clickedRow === header && (
                      <FontAwesomeIcon
                        icon="caret-down"
                        className="tableStyle__icon"
                      />
                    )}
                    <span className="tableStyle__header">
                      {header.split('_').join(' ')}
                    </span>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <tr
              onClick={() =>
                this.props.history.push(`/user/${row.id}`, { ...row })
              }
              key={row.id}
            >
              {headers.map(
                (header) =>
                  header !== 'id' && (
                    <td className={header === 'web' ? 'tableStyle__link' : ''}>
                      {row[header]}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default withRouter(Table);
