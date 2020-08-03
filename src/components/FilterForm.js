import React from 'react'
import { FormField } from 'react-form-input-fields'
import { Scrollbars } from 'react-custom-scrollbars'
import 'react-form-input-fields/dist/index.css'
import styles from './../styles.module.css'
import { closeBlackIcon } from './ImageConrainer'

export default class FilterForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            formvalue: {}
        }
    }

    componentDidMount() {
        const { formvalue } = this.state
        const { data } = this.props
        data.map(field => {
            formvalue[field.stateKey] = field.value
        });
        this.setState({ formvalue })
    }

    handleOnChange = (value, key) => {
        const { formvalue } = this.state
        formvalue[key] = value
        this.setState({ formvalue })
    }

    renderFields = (data) => {
        const { formvalue } = this.state

        return data.map((field, i) => {
            if (field.type.toUpperCase() === 'TEXT') {

                return (
                    <div className={styles.form_filed_item}>
                        <FormField
                            key={i}
                            type="text"
                            standard="labeleffect"
                            value={formvalue[field.stateKey]}
                            keys={field.stateKey}
                            effect={'effect_2'}
                            handleOnChange={(value) => this.handleOnChange(value, field.stateKey)
                            }
                            placeholder={field.fieldName || 'Field Name'} />
                    </div>
                )
            } else if (field.type.toUpperCase() === 'SELECT') {
                return (
                    <div className={styles.form_filed_item}>
                        <FormField
                            type="select"
                            option={field.option || []}
                            value={formvalue[field.stateKey]}
                            label={field.fieldName || 'Select option'}
                            keys={field.stateKey}
                            hanldeOnChange={(value) => this.handleOnChange(value, field.stateKey)} />
                    </div>
                )
            }
        });
    }

    render() {
        const { data } = this.props
        return (
            <form className={styles.filter_form}>
                <span className={styles.close_icon} onClick={() => this.props.handleFilterClose()}>
                    <img src={closeBlackIcon} width={15} height={15} alt="close" />
                </span>
                <Scrollbars style={{ width: '100%', minHeight: '50vh' }}>
                    <div className={styles.field_section}>
                        {this.renderFields(data)}
                    </div>
                </Scrollbars>

                <div className={styles.button_container}>
                    <button className={`${styles.button} ${styles.submit_button} `} type="submit">Filter</button>
                    <button className={`${styles.button} ${styles.rest_button}`} type="reset">Reset</button>
                </div>
            </form>
        )
    }


}