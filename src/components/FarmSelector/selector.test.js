import { fireEvent, render, screen } from '@testing-library/react'
import FarmSelector from './index'

describe('FarmSelector', () => {
  const farms = [
    {
      farm_id: '1',
      location: 'Metsola',
      name: 'Friman Metsola Collective',
    },
  ]
  test('render component', () => {
    const { container } = render(
      <FarmSelector
        farms={farms}
        handleOnFarmChange={() => {}}
        handleOnPeriodChange={() => {}}
        handleOnSensorChange={() => {}}
        farmValue={() => {}}
        periodValue={() => {}}
        sensorValue={() => {}}
        handleOnChangeType={() => {}}
        handleOnFarmChoice={() => {}}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('should be have sensor selector like ph sensor when choosing a month period', () => {
    render(
      <FarmSelector
        farms={farms}
        handleOnFarmChange={() => {}}
        handleOnPeriodChange={() => {}}
        handleOnSensorChange={() => {}}
        farmValue={() => {}}
        periodValue={() => {}}
        sensorValue={() => {}}
        handleOnChangeType={() => {}}
        handleOnFarmChoice={() => {}}
      />
    )

    expect(screen.getByText('A Month')).toBeInTheDocument()
    expect(screen.getByText('pH')).toBeInTheDocument()
  })
})

// highlight-start
jest.mock('react-select', () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      (option) => option.value === event.currentTarget.value
    )
    onChange(option)
  }

  return (
    <select data-testid='select' value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
})
// highlight-end

test('with mock', () => {
  render(<FarmSelector />)
  expect(screen.getByText('A Month')).toBeInTheDocument()
  // highlight-start
  fireEvent.change(screen.getByTestId('select-period'), {
    target: { value: 'month' },
  })
  // highlight-end
  expect(screen.getByText('Temperature')).toBeInTheDocument()
})
