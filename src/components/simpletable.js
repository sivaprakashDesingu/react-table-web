import React from 'react'
import { FormField } from 'react-form-input-fields'
import { Scrollbars } from 'react-custom-scrollbars'
import FilterForm from './FilterForm'

import 'react-form-input-fields/dist/index.css'
import styles from './../styles.module.css'

import { prevIcons, filterIcon } from './ImageConrainer'

export default class SimpleTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keys: [],
            data: [],
            filterKey: '',
            filterSlide: false,
            resultsPerPage: 5,
            currentTablePage: 1,
            selectedCheckbox: []
        }
    }

    componentDidMount() {
        const { data } = this.props
        const rows = data;
        let cells = []
        if (data && data.length >= 1) {
            cells = Object.keys(data[0])
            this.setState({ keys: cells })
        }

    }



    renderTableHeaderCell(keys) {
        if (keys && keys.length >= 1) {
            return keys.map((_cell, index) => <span className={styles.table_header_cell} key={index}>{_cell}</span>)
        }
    }

    handleSelectCheckBoxChange = (index, row_data, controll) => {
        const { data } = this.props
        const { selectedCheckbox, currentTablePage } = this.state;
        if (index === 'all') {

        } else {
            selectedCheckbox.push(
                {
                    selectedIndex: index,
                    rowData: row_data
                }
            )
            this.setState({ selectedCheckbox })
        }

    }

    renderTableBody(data) {
        if (data.length === 0) {
            return<span className={styles.no_data_found}> No data found !</span>
        }
        else {
            return data.map((_data, index) => {
                return (
                    <div key={index} className={styles.table_body_row}>
                        <div className={styles.table_body_cell} style={{ maxWidth: 50 }}>
                            <FormField
                                type="checkbox"
                                effect={`effect_2`}
                                value={false}
                                valueToBeReturned={index}
                                label={''}
                                keys={''}
                                hanldeOnChange={(value) => this.handleSelectCheckBoxChange(value, _data, 'select')} />

                        </div>
                        {this.renderTableBodyCell(_data)}
                    </div>
                )
            });
        }
    }

    renderTableBodyCell(cell) {
        let key = Object.keys(cell)
        return key.map((_cell, index) => <span className={styles.table_body_cell} key={index}>{cell[_cell]}</span>)
    }

    handleOnChange(value, key) {
        this.setState({ [key]: value });
    }

    renderSearchResultCountSection = (search, filter) => {
        const { filterKey } = this.state

        if (search && filter) {
            return (
                <div className={styles.top_search_container}>
                    <div className={styles.search_section}>
                        <FormField
                            type="text"
                            standard="labeleffect"
                            value={filterKey}
                            keys={'name'}
                            effect={'effect_2'}
                            handleOnChange={(value) => this.handleOnChange(value, 'filterKey')}
                            placeholder={'Type here..'} />
                    </div>
                    <div className={styles.filter_icon_section}>
                        <span onClick={() => this.setState({ filterSlide: true })} className={styles.filter_icon}><img src={filterIcon} widtha={25} height={25} alt="Filter" /> </span>
                    </div>
                </div>
            )
        }
    }

    renderResultCountInof = () => {
        const { data } = this.props
        const { resultsPerPage, currentTablePage } = this.state
        let info = ''
        if (currentTablePage === 1) {
            info = `1 - ${resultsPerPage} of ${data.length}`
        } else {
            info = `${resultsPerPage * (currentTablePage - 1) + 1} - ${(resultsPerPage * currentTablePage)} of ${data.length}`
        }

        return info;
    }

    hanldeNextPagination = () => {

        const nextPag = this.state.currentTablePage + 1;
        this.setState({ currentTablePage: nextPag });

    }

    hanldePrevPagination = () => {

        const nextPag = this.state.currentTablePage - 1;
        if (this.state.currentTablePage === 1) {
            return false;
        } else {
            this.setState({ currentTablePage: nextPag });
        }
    }

    isPrevActionDisabled = () => {
        const { data } = this.props
        const { resultsPerPage, currentTablePage } = this.state
        if (currentTablePage === 1) {
            return true
        } else {
            let action = (data.length / resultsPerPage) - 1 === currentTablePage ? true : false
            return action
        }
    }

    isNextActionDisabled = () => {

        const { data } = this.props
        const { resultsPerPage, currentTablePage } = this.state

        if (data.length <= Number(resultsPerPage) && currentTablePage === 1) {
            return true
        } else {
            let action = Math.ceil(data.length / resultsPerPage) === currentTablePage ? true : false
            return action
        }
    }

    filterEachColumn(keys, rowData, filterKey) {
        //console.log(keys,rowData)
        let found = keys.map(_d => {
            return rowData[_d].toString().toUpperCase().includes(filterKey.toUpperCase());
        });

        return found.includes(true);
    }

    getDataToBeDisplayed = () => {
        const { data } = this.props
        const { keys, resultsPerPage, currentTablePage, filterKey } = this.state
        const _data = currentTablePage === 1 ? data.slice(0, resultsPerPage) : data.slice((currentTablePage - 1) * resultsPerPage, currentTablePage * resultsPerPage)
        const filtedData = _data.map(row_data => {
            if (this.filterEachColumn(keys, row_data, filterKey))
                return row_data;
            else
                return null
        })
        const filtered = filtedData.filter(function (el) {
            return el != null;
        });

        return filtered;
    }


    render() {

        const { data, search, result, filter, selectOption } = this.props
        const { keys, resultsPerPage, currentTablePage, filterSlide } = this.state
        //console.log(data)
        const RowsToBeDisplayed = this.getDataToBeDisplayed()
        //console.log(RowsToBeDisplayed)

        return (
            <div className={styles.table_components}>

                <div className={styles.simple_table}>
                    {/* Render table Header sectoin*/}
                    {search || filter.show ? <div className={styles.search_section}>
                        {this.renderSearchResultCountSection(search, filter.show)}
                    </div> : null}
                    {/* Render table Header sectoin*/}

                    {/* Render table Header sectoin*/}
                    <div className={styles.table_header_row}>
                        <div className={styles.table_header_cell} style={{ marginTop: -5, maxWidth: 50 }}>
                            <FormField
                                type="checkbox"
                                effect={`effect_2`}
                                value={false}
                                valueToBeReturned={'all'}
                                label={''}
                                keys={''}
                                hanldeOnChange={(value) => this.handleSelectCheckBoxChange(value, 'all', 'select')} />
                        </div>
                        {this.renderTableHeaderCell(keys)}
                    </div>
                    {/* Render table Header sectoin*/}

                    {/* Render table Body sectoin*/}
                    <Scrollbars className={styles.body_section} style={{ width: '100%', height: 300 }}>
                        {/* <div className={styles.body_section}> */}
                        {this.renderTableBody(RowsToBeDisplayed)}
                        {/* </div> */}
                    </Scrollbars>
                    <div className={styles.table_footer_section}>
                        {result.show ?
                            <div className={styles.result_count_section} >
                                <div className={styles.select_field}>
                                    <FormField
                                        type="select"
                                        option={result.option || []}
                                        value={resultsPerPage}
                                        label={'Rows per page'}
                                        keys={"resultsPerPage"}
                                        hanldeOnChange={(value) => this.handleOnChange(value, 'resultsPerPage')} />
                                </div>
                            </div> : null}
                        <div className={styles.result_count_display_section} >
                            <span>{this.renderResultCountInof()}</span>
                        </div>
                        <div className={styles.pagination_section} >
                            <span onClick={() => this.hanldePrevPagination()} className={`${styles.prev} ${this.isPrevActionDisabled() ? styles.disable : ''}`}>
                                <img src={prevIcons} width={15} height={15} alt="prev icons" />
                            </span>

                            <span className={`${styles.next} ${this.isNextActionDisabled() ? styles.disable : ''}`} onClick={() => this.hanldeNextPagination()}>
                                <img src={prevIcons} width={15} height={15} alt="Next icons" />
                            </span>
                        </div>
                    </div>

                    {/* Render table Body sectoin*/}

                </div>
                {filter.show && filterSlide ?
                    <div className={styles.overlay}>
                        <div className={styles.filter_form_wrapper}>
                            <FilterForm
                                data={filter.fields}
                                handleFilterClose={() => this.setState({ filterSlide: false })} />
                        </div>
                    </div> : null}
            </div>
        )
    }
}


SimpleTable.defaultProps = {
    data: [],
    search: false,
    result: {
        count: 10,
        option: [5, 10, 20, 50, 100],
        show: false
    },
    selectOption: false,
    filter: {
        show: false,
        fields: []
    },
}