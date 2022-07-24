import Preloader from "app/components/Preloader"
import { useGetAllUsersQuery } from "lib/api/user/index.query"
import Permanent from "./Permanent"
import Temporary from "./Temporary"


const AdminManagement = () => {

	const { data, isLoading } = useGetAllUsersQuery()

	return (
		<>
			{ ( !data || isLoading ) && <Preloader /> }
			{ ( !isLoading && data ) && <>
				<Temporary users={ data.temporary } />
				<Permanent users={ data.permanent } />
			</> }

		</>
	)
}

export default AdminManagement