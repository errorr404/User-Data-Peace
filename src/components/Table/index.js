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
    console.log('rowData', rowData);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rowData.length < this.props.rowData.length) {
      this.setState({ rowData: this.props.rowData });
    }
  }
  compareBy = (key) => {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = (key) => {
    this.setState({ clickedRow: key });
    let arrayCopy = [...this.state.rowData];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ rowData: arrayCopy });
  };

  render() {
    const { headers } = this.props;
    const { rowData, clickedRow } = this.state;
    console.log(this.props);
    return (
      <table className="tableStyle">
        <thead>
          <tr>
            {headers.map(
              (header) =>
                header !== 'id' && (
                  <th onClick={() => this.sortBy(header)}>
                    {clickedRow === header && (
                      <FontAwesomeIcon
                        icon="caret-down"
                        className="tableStyle__icon"
                      />
                    )}
                    <span>{header}</span>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <tr onClick={() => this.props.history.push(`/user/${row.id}`)}>
              {headers.map((header) => (
                header!=='id' &&
                <td className={header === 'web' ? 'tableStyle__link' : ''}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default withRouter(Table);
