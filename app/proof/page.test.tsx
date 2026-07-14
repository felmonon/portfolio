import { redirect } from 'next/navigation'

vi.mock('next/navigation', () => ({ redirect: vi.fn() }))

import SelectedWorkPage from './page'

describe('Selected work route', () => {
  it('redirects the old proof route to the canonical homepage work section', () => {
    SelectedWorkPage()
    expect(redirect).toHaveBeenCalledWith('/#work')
  })
})
